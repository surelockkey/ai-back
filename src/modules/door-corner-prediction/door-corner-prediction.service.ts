import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileUpload } from 'graphql-upload';
import { CornerPointsDto, PointDto } from './dto/corner-points.dto';

interface Prediction {
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: number;
  class: string;
  points: PointDto[];
  class_id: number;
  detection_id: string;
}

@Injectable()
export class DoorCornerPredictionService {
  private readonly logger = new Logger(DoorCornerPredictionService.name);
  private readonly roboflowApiKey: string;
  private readonly roboflowEndpoint: string;

  constructor(private configService: ConfigService) {
    this.roboflowApiKey = this.configService.get<string>('ROBOFLOW_API_KEY');
    this.roboflowEndpoint =
      'https://serverless.roboflow.com/infer/workflows/surelock/detect-count-and-visualize-4';
  }

  async predictCornersFromUpload(
    image: FileUpload,
  ): Promise<CornerPointsDto[]> {
    try {
      this.logger.log('Starting corner prediction from uploaded image');

      // Create readable stream from upload
      const { createReadStream } = image;
      const stream = createReadStream();

      // Convert stream to base64 for Roboflow API
      const base64Image = await this.streamToBase64(stream);

      // Call Roboflow API with base64 image
      const result = await this.callRoboflowAPI(base64Image);

      this.logger.log('Roboflow API call completed successfully');

      const corners: CornerPointsDto[] =
        result.outputs[0].predictions.predictions.map((prediction) =>
          this.extractCornerPoints(prediction),
        );

      return corners;
    } catch (error) {
      this.logger.error('Error in predictCornersFromUpload:', error);
      throw error;
    }
  }

  private async callRoboflowAPI(base64Image: string): Promise<any> {
    try {
      const response = await fetch(this.roboflowEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: this.roboflowApiKey,
          inputs: {
            image: { type: 'base64', value: base64Image },
          },
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Roboflow API request failed: ${response.status} ${response.statusText}`,
        );
      }

      return await response.json();
    } catch (error) {
      this.logger.error('Error calling Roboflow API:', error);
      throw error;
    }
  }

  private async streamToBase64(stream: NodeJS.ReadableStream): Promise<string> {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];

      stream.on('data', (chunk: Buffer) => {
        chunks.push(chunk);
      });

      stream.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const base64 = buffer.toString('base64');
        resolve(base64);
      });

      stream.on('error', (error) => {
        reject(error);
      });
    });
  }

  extractCornerPoints(prediction: Prediction): CornerPointsDto {
    const points = prediction.points;

    if (!points || points.length === 0) {
      throw new Error('No points found in prediction');
    }

    // Find extreme points
    let topLeft = points[0];
    let topRight = points[0];
    let bottomLeft = points[0];
    let bottomRight = points[0];

    for (const point of points) {
      // Top-left: minimize x + y (closest to origin)
      if (point.x + point.y < topLeft.x + topLeft.y) {
        topLeft = point;
      }

      // Top-right: maximize x - y (rightmost in upper area)
      if (point.x - point.y > topRight.x - topRight.y) {
        topRight = point;
      }

      // Bottom-left: minimize x - y (leftmost in lower area)
      if (point.x - point.y < bottomLeft.x - bottomLeft.y) {
        bottomLeft = point;
      }

      // Bottom-right: maximize x + y (farthest from origin)
      if (point.x + point.y > bottomRight.x + bottomRight.y) {
        bottomRight = point;
      }
    }

    return {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    };
  }
}
