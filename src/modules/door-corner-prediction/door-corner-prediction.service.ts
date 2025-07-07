import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { FileUpload } from 'graphql-upload';
import { PredictionResult } from './dto/door-corner-prediction.dto';
import * as sharp from 'sharp';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class DoorCornerPredictionService {
  private readonly logger = new Logger(DoorCornerPredictionService.name);
  private readonly openai: OpenAI;
  private readonly outputDir: string;

  constructor(private configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('app.open_ai_key'),
    });

    // Configure output directory for images
    this.outputDir =
      this.configService.get<string>('app.image_output_dir') ||
      './uploads/annotated';
    this.ensureOutputDirectory();
  }

  private async ensureOutputDirectory(): Promise<void> {
    try {
      await fs.access(this.outputDir);
    } catch {
      await fs.mkdir(this.outputDir, { recursive: true });
      this.logger.log(`Created output directory: ${this.outputDir}`);
    }
  }

  async predictCornersFromUpload(
    fileUpload: FileUpload,
  ): Promise<PredictionResult> {
    try {
      this.logger.log('Starting garage door corner prediction from upload');

      // Validate file type
      if (!this.isValidImageType(fileUpload.mimetype)) {
        throw new Error(
          `Invalid file type: ${fileUpload.mimetype}. Only images are allowed.`,
        );
      }

      // Convert file upload to buffer
      const imageBuffer = await this.fileUploadToBuffer(fileUpload);

      // Get prediction result
      const predictionResult = await this.predictCorners(imageBuffer);

      // Save original and annotated images
      const timestamp = Date.now();
      const originalFilename = `original_${timestamp}.${this.getFileExtension(
        fileUpload.mimetype,
      )}`;
      const annotatedFilename = `annotated_${timestamp}.${this.getFileExtension(
        fileUpload.mimetype,
      )}`;

      const originalPath = path.join(this.outputDir, originalFilename);
      const annotatedPath = path.join(this.outputDir, annotatedFilename);

      // Save original image
      await fs.writeFile(originalPath, imageBuffer);

      // Create annotated image with red dots
      await this.createAnnotatedImage(
        imageBuffer,
        predictionResult.corners,
        annotatedPath,
      );

      this.logger.log(
        `Images saved - Original: ${originalPath}, Annotated: ${annotatedPath}`,
      );

      return predictionResult;
    } catch (error) {
      this.logger.error(
        'Error predicting garage door corners from upload',
        error.stack,
      );
      throw new Error(`Failed to predict corners: ${error.message}`);
    }
  }

  async predictCornersFromUploadWithRetry(
    fileUpload: FileUpload,
    maxRetries = 3,
  ): Promise<PredictionResult> {
    let lastError: Error;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        this.logger.log(`Prediction attempt ${attempt}/${maxRetries}`);
        return await this.predictCornersFromUpload(fileUpload);
      } catch (error) {
        lastError = error;
        this.logger.warn(`Attempt ${attempt} failed: ${error.message}`);

        if (attempt < maxRetries) {
          // Wait before retry with exponential backoff
          const delay = Math.pow(2, attempt) * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }

    throw new Error(
      `All ${maxRetries} attempts failed. Last error: ${lastError.message}`,
    );
  }

  async batchPredictCornersFromUploads(
    fileUploads: FileUpload[],
  ): Promise<PredictionResult[]> {
    this.logger.log(
      `Starting batch prediction for ${fileUploads.length} uploaded images`,
    );

    const results = await Promise.allSettled(
      fileUploads.map((upload) =>
        this.predictCornersFromUploadWithRetry(upload),
      ),
    );

    const successful = results
      .filter(
        (result): result is PromiseFulfilledResult<PredictionResult> =>
          result.status === 'fulfilled',
      )
      .map((result) => result.value);

    const failed = results.filter(
      (result) => result.status === 'rejected',
    ).length;

    this.logger.log(
      `Batch prediction completed: ${successful.length} successful, ${failed} failed`,
    );

    return successful;
  }

  private async createAnnotatedImage(
    imageBuffer: Buffer,
    corners: Array<{ x: number; y: number; label: string }>,
    outputPath: string,
  ): Promise<void> {
    try {
      // Get image metadata to determine dimensions
      const metadata = await sharp(imageBuffer).metadata();
      const { width, height } = metadata;

      if (!width || !height) {
        throw new Error('Could not determine image dimensions');
      }

      // Create SVG overlay with red dots
      const dotRadius = Math.min(width, height) * 0.01; // 1% of smallest dimension
      const strokeWidth = dotRadius * 0.3;

      const svgOverlay = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          ${corners
            .map(
              (corner) => `
            <circle 
              cx="${corner.x}" 
              cy="${corner.y}" 
              r="${dotRadius}" 
              fill="red" 
              stroke="white" 
              stroke-width="${strokeWidth}"
              opacity="0.8"
            />
            <text 
              x="${corner.x + dotRadius * 2}" 
              y="${corner.y - dotRadius}" 
              font-family="Arial, sans-serif" 
              font-size="${dotRadius * 2}" 
              fill="red" 
              stroke="white" 
              stroke-width="${strokeWidth * 0.5}"
              font-weight="bold"
            >
              ${corner.label}
            </text>
          `,
            )
            .join('')}
        </svg>
      `;

      // Composite the SVG overlay onto the original image
      await sharp(imageBuffer)
        .composite([
          {
            input: Buffer.from(svgOverlay),
            top: 0,
            left: 0,
          },
        ])
        .jpeg({ quality: 90 })
        .toFile(outputPath);

      this.logger.log(`Annotated image created: ${outputPath}`);
    } catch (error) {
      this.logger.error('Error creating annotated image', error.stack);
      throw new Error(`Failed to create annotated image: ${error.message}`);
    }
  }

  private getFileExtension(mimetype: string): string {
    const extensions: { [key: string]: string } = {
      'image/jpeg': 'jpg',
      'image/jpg': 'jpg',
      'image/png': 'png',
      'image/gif': 'gif',
      'image/webp': 'webp',
      'image/bmp': 'bmp',
      'image/tiff': 'tiff',
    };
    return extensions[mimetype.toLowerCase()] || 'jpg';
  }

  private async fileUploadToBuffer(fileUpload: FileUpload): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const stream = fileUpload.createReadStream();
      const chunks: Buffer[] = [];

      stream.on('data', (chunk) => {
        chunks.push(chunk);
      });

      stream.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve(buffer);
      });

      stream.on('error', (error) => {
        reject(new Error(`Error reading file stream: ${error.message}`));
      });
    });
  }

  private isValidImageType(mimetype: string): boolean {
    const validTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/bmp',
      'image/tiff',
    ];
    return validTypes.includes(mimetype.toLowerCase());
  }

  async predictCorners(imageBuffer: Buffer): Promise<PredictionResult> {
    try {
      this.logger.log('Starting garage door corner prediction');

      // Convert buffer to base64
      const base64Image = imageBuffer.toString('base64');
      const imageUrl = `data:image/jpeg;base64,${base64Image}`;

      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o', // Use GPT-4 with vision capabilities
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `Analyze this image and identify the four corner coordinates of the garage door. 
                
                Please respond with a JSON object containing:
                - An array of corner coordinates with x, y values and labels
                - A confidence score (0-1)
                
                Format:
                {
                  "corners": [
                    {"x": number, "y": number, "label": "top-left"},
                    {"x": number, "y": number, "label": "top-right"},
                    {"x": number, "y": number, "label": "bottom-left"},
                    {"x": number, "y": number, "label": "bottom-right"}
                  ],
                  "confidence": number
                }
                
                Coordinates should be in pixels relative to the image dimensions.`,
              },
              {
                type: 'image_url',
                image_url: {
                  url: imageUrl,
                  detail: 'high',
                },
              },
            ],
          },
        ],
        max_tokens: 500,
        temperature: 0.1, // Low temperature for consistent results
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        throw new Error('No response content from OpenAI');
      }

      console.log({ content });

      // Parse the JSON response (handle markdown code blocks)
      const parsedResult = this.parseJsonFromContent(content);

      // Validate the response structure
      this.validatePredictionResult(parsedResult);

      const result: PredictionResult = {
        corners: parsedResult.corners,
        confidence: parsedResult.confidence,
        processedAt: new Date(),
      };

      this.logger.log(
        `Corner prediction completed with confidence: ${result.confidence}`,
      );
      return result;
    } catch (error) {
      this.logger.error('Error predicting garage door corners', error.stack);
      throw new Error(`Failed to predict corners: ${error.message}`);
    }
  }

  async predictCornersWithRetry(
    imageBuffer: Buffer,
    maxRetries = 3,
  ): Promise<PredictionResult> {
    let lastError: Error;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        this.logger.log(`Prediction attempt ${attempt}/${maxRetries}`);
        return await this.predictCorners(imageBuffer);
      } catch (error) {
        lastError = error;
        this.logger.warn(`Attempt ${attempt} failed: ${error.message}`);

        if (attempt < maxRetries) {
          // Wait before retry with exponential backoff
          const delay = Math.pow(2, attempt) * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }

    throw new Error(
      `All ${maxRetries} attempts failed. Last error: ${lastError.message}`,
    );
  }

  private parseJsonFromContent(content: string): any {
    try {
      // First try to parse as-is
      return JSON.parse(content);
    } catch (error) {
      // If that fails, try to extract JSON from markdown code blocks
      const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[1]);
      }

      // Try to find JSON object without code blocks
      const jsonObjectMatch = content.match(/\{[\s\S]*\}/);
      if (jsonObjectMatch) {
        return JSON.parse(jsonObjectMatch[0]);
      }

      throw new Error(`Could not extract valid JSON from response: ${content}`);
    }
  }

  private validatePredictionResult(result: any): void {
    if (!result.corners || !Array.isArray(result.corners)) {
      throw new Error('Invalid response: corners array is required');
    }

    if (result.corners.length !== 4) {
      throw new Error('Invalid response: exactly 4 corners are required');
    }

    const requiredLabels = [
      'top-left',
      'top-right',
      'bottom-left',
      'bottom-right',
    ];
    const providedLabels = result.corners.map((corner) => corner.label);

    for (const label of requiredLabels) {
      if (!providedLabels.includes(label)) {
        throw new Error(`Missing required corner label: ${label}`);
      }
    }

    for (const corner of result.corners) {
      if (typeof corner.x !== 'number' || typeof corner.y !== 'number') {
        throw new Error('Invalid corner coordinates: x and y must be numbers');
      }
    }

    if (
      typeof result.confidence !== 'number' ||
      result.confidence < 0 ||
      result.confidence > 1
    ) {
      throw new Error(
        'Invalid confidence value: must be a number between 0 and 1',
      );
    }
  }

  async batchPredictCorners(images: Buffer[]): Promise<PredictionResult[]> {
    this.logger.log(`Starting batch prediction for ${images.length} images`);

    const results = await Promise.allSettled(
      images.map((image) => this.predictCornersWithRetry(image)),
    );

    const successful = results
      .filter(
        (result): result is PromiseFulfilledResult<PredictionResult> =>
          result.status === 'fulfilled',
      )
      .map((result) => result.value);

    const failed = results.filter(
      (result) => result.status === 'rejected',
    ).length;

    this.logger.log(
      `Batch prediction completed: ${successful.length} successful, ${failed} failed`,
    );

    return successful;
  }
}
