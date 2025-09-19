import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  // TODO: Move this to environment variables or database
  private readonly validApiKeys = [
    'apikey-Wv4C1xuFz6TDAynQWJjPzHH8SWmaWD0WgHeqCBgZDDZA0xqT',
    // Add more API keys as needed
  ];

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const apiKey = this.extractApiKey(request);

    if (!apiKey) {
      throw new UnauthorizedException('API key is required');
    }

    if (!this.validApiKeys.includes(apiKey)) {
      throw new UnauthorizedException('Invalid API key');
    }

    return true;
  }

  private extractApiKey(request: Request): string | undefined {
    // Check for API key in Authorization header: "Bearer sk-..."
    const authHeader = request.headers.authorization;
    if (authHeader?.startsWith('Bearer ')) {
      return authHeader.substring(7);
    }

    // Check for API key in X-API-Key header
    const apiKeyHeader = request.headers['x-api-key'];
    if (typeof apiKeyHeader === 'string') {
      return apiKeyHeader;
    }

    // Check for API key in query parameter
    const queryApiKey = request.query.api_key;
    if (typeof queryApiKey === 'string') {
      return queryApiKey;
    }

    return undefined;
  }
}
