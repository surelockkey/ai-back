import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileUpload } from 'graphql-upload';

@Injectable()
export class DoorCornerPredictionService {
  private readonly logger = new Logger(DoorCornerPredictionService.name);
  private readonly roboflowApiKey: string;
  private readonly roboflowEndpoint: string;

  constructor(private configService: ConfigService) {
    this.roboflowApiKey = this.configService.get<string>('ROBOFLOW_API_KEY');
    this.roboflowEndpoint =
      'https://serverless.roboflow.com/infer/workflows/surelock/detect-count-and-visualize-3';
  }

  async predictCornersFromUpload(image: FileUpload): Promise<any> {
    try {
      this.logger.log('Starting corner prediction from uploaded image');

      // Create readable stream from upload
      const { createReadStream, filename, mimetype } = image;
      const stream = createReadStream();

      // Convert stream to base64 for Roboflow API
      const base64Image = await this.streamToBase64(stream);

      // Call Roboflow API
      const result = await this.callRoboflowAPI(base64Image);

      // this.logger.log(
      //   'Roboflow API Response:',
      //   JSON.stringify(result, null, 2),
      // );

      // console.log(result.outputs[0].predictions.predictions[0]);

      return result.outputs[0].predictions.predictions[0];
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
}
