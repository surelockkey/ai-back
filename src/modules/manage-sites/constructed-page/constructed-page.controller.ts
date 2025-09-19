import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  UseGuards,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBearerAuth,
  ApiSecurity,
} from '@nestjs/swagger';
import { ConstructedPageService } from './constructed-page.service';
import { ConstructedPageType } from './enum/constructed-page-type.enum';
import { ApiKeyGuard } from './guard/api-key.guard';
import {
  ConstructedPageResponseDto,
  CreateConstructedPageRestDto,
  GetConstructedPagesQueryDto,
  PaginatedConstructedPagesResponseDto,
} from './dto/constructed-page-rest.dto';
import { Readable } from 'stream';

@ApiTags('Constructed Pages')
@Controller('api/v1/constructed-pages')
@UseGuards(ApiKeyGuard)
@ApiSecurity('api-key')
@ApiBearerAuth('api-key')
export class ConstructedPageRestController {
  constructor(
    private readonly constructedPageService: ConstructedPageService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new constructed page',
    description:
      'Creates a new constructed page with blocks, meta info, and preview',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Page created successfully',
    type: ConstructedPageResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Invalid or missing API key',
  })
  async createConstructedPage(
    @Body() createPageDto: CreateConstructedPageRestDto,
  ): Promise<ConstructedPageResponseDto> {
    try {
      // Transform REST DTO to GraphQL DTO
      const graphqlDto = await this.transformToGraphQLDto(createPageDto);
      const createdPage =
        await this.constructedPageService.createConstructedPage(graphqlDto);
      return this.transformToResponseDto(createdPage);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  @ApiOperation({
    summary: 'Get constructed pages with filtering and pagination',
    description:
      'Retrieves constructed pages with optional filtering by type, status, and company',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number (starts from 1)',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Items per page (max 100)',
  })
  @ApiQuery({
    name: 'type',
    required: false,
    enum: ConstructedPageType,
    description: 'Filter by page type',
  })
  @ApiQuery({
    name: 'is_posted',
    required: false,
    type: Boolean,
    description: 'Filter by posted status',
  })
  @ApiQuery({
    name: 'constructed_page_company_id',
    required: false,
    description: 'Filter by company ID',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Pages retrieved successfully',
    type: PaginatedConstructedPagesResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Invalid or missing API key',
  })
  async getConstructedPages(
    @Query() query: GetConstructedPagesQueryDto,
  ): Promise<PaginatedConstructedPagesResponseDto> {
    const page = Math.max(1, Number(query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(query.limit) || 10));
    const skip = (page - 1) * limit;

    const args = {
      pagination: { skip, take: limit },
      type: query.type,
      is_posted: query.is_posted,
      constructed_page_company_id: query.constructed_page_company_id,
    };

    const pages = await this.constructedPageService.getConstructedPages(args);

    console.log('pages', pages);

    // Get total count - you'll need to add this method to your service
    const total = await this.constructedPageService.getConstructedPagesCount({
      type: query.type,
      is_posted: query.is_posted,
      constructed_page_company_id: query.constructed_page_company_id,
    });

    return {
      data: pages.map((page) => this.transformToResponseDto(page)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get constructed page by ID',
    description: 'Retrieves a specific constructed page by its ID',
  })
  @ApiParam({ name: 'id', description: 'Page ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Page retrieved successfully',
    type: ConstructedPageResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Page not found',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Invalid or missing API key',
  })
  async getConstructedPageById(
    @Param('id') id: string,
  ): Promise<ConstructedPageResponseDto> {
    const page = await this.constructedPageService.getConstructedPageById(id);
    if (!page) {
      throw new BadRequestException('Page not found');
    }
    return this.transformToResponseDto(page);
  }

  @Get('by-url/:url')
  @ApiOperation({
    summary: 'Get constructed page by URL slug',
    description: 'Retrieves a specific constructed page by its URL slug',
  })
  @ApiParam({ name: 'url', description: 'Page URL slug' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Page retrieved successfully',
    type: ConstructedPageResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Page not found',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Invalid or missing API key',
  })
  async getConstructedPageByUrl(
    @Param('url') url: string,
  ): Promise<ConstructedPageResponseDto> {
    const page = await this.constructedPageService.getConstructedPageByUrl(url);
    if (!page) {
      throw new BadRequestException('Page not found');
    }
    return this.transformToResponseDto(page);
  }

  private async transformToGraphQLDto(
    restDto: CreateConstructedPageRestDto,
  ): Promise<any> {
    console.log('🔄 Transforming REST DTO to GraphQL DTO:', {
      hasBlocks: !!restDto.blocks?.length,
      hasMetaInfo: !!restDto.meta_info,
      hasPreview: !!restDto.preview,
    });

    const { blocks, meta_info, preview, ...pageData } = restDto;

    // Transform blocks - ensure they are included
    let transformedBlocks = undefined;
    if (blocks && blocks.length > 0) {
      console.log(`🧱 Processing ${blocks.length} blocks`);
      transformedBlocks = await Promise.all(
        blocks.map(async (block, index) => {
          console.log(`🧱 Processing block ${index + 1}:`, {
            type: block.type_block,
            headline: block.headline,
            hasPhoto: !!block.photo?.imageData,
          });

          const { photo, ...blockData } = block;
          const transformedBlock: any = { ...blockData };

          if (photo?.imageData) {
            console.log(`📷 Creating file upload for block ${index + 1}`);
            try {
              transformedBlock.photo = {
                alt: photo.alt || '',
                title: photo.title || '',
                file: await this.createRealFileUpload(photo.imageData),
              };
              console.log(`✅ File upload created for block ${index + 1}`);
            } catch (error) {
              console.error(
                `❌ Error creating file upload for block ${index + 1}:`,
                error,
              );
              throw error;
            }
          }

          return transformedBlock;
        }),
      );
      console.log(`✅ All ${transformedBlocks.length} blocks processed`);
    }

    // Transform preview - ensure it's included
    let transformedPreview = undefined;
    if (preview) {
      console.log('🖼️ Processing preview:', {
        headline: preview.headline,
        hasPhoto: !!preview.photo?.imageData,
      });

      transformedPreview = { ...preview };

      if (preview.photo?.imageData) {
        console.log('📷 Creating file upload for preview');
        try {
          transformedPreview.photo = {
            alt: preview.photo.alt || '',
            title: preview.photo.title || '',
            file: await this.createRealFileUpload(preview.photo.imageData),
          };
          console.log('✅ File upload created for preview');
        } catch (error) {
          console.error('❌ Error creating file upload for preview:', error);
          throw error;
        }
      } else {
        // Remove photo if no imageData provided
        delete transformedPreview.photo;
      }
    }

    const result = {
      ...pageData,
      blocks: transformedBlocks,
      meta_info,
      preview: transformedPreview,
    };

    console.log('🎯 Final GraphQL DTO:', {
      type: result.type,
      hasBlocks: !!result.blocks?.length,
      blockCount: result.blocks?.length || 0,
      hasMetaInfo: !!result.meta_info,
      hasPreview: !!result.preview,
      is_posted: result.is_posted,
    });

    return result;
  }

  private async createRealFileUpload(imageData: string): Promise<any> {
    try {
      let buffer: Buffer;
      let mimetype: string;
      let extension: string;

      // Handle data URL format (e.g., "data:image/jpeg;base64,...")
      if (imageData.startsWith('data:')) {
        const [header, base64Data] = imageData.split(',');
        if (!base64Data) {
          throw new Error('Invalid data URL format');
        }

        const mimeMatch = header.match(/data:([^;]+)/);
        mimetype = mimeMatch ? mimeMatch[1] : 'image/jpeg';
        extension = mimetype.split('/')[1] || 'jpg';

        buffer = Buffer.from(base64Data, 'base64');
      }
      // Handle raw base64 string
      else if (/^[A-Za-z0-9+/]+=*$/.test(imageData)) {
        mimetype = 'image/jpeg';
        extension = 'jpg';
        buffer = Buffer.from(imageData, 'base64');
      } else {
        throw new Error(
          'Unsupported image format. Please provide base64 encoded image data or data URL',
        );
      }

      // Validate buffer
      if (!buffer || buffer.length === 0) {
        throw new Error('Invalid image data - empty buffer');
      }

      // Validate it's actually an image by checking magic bytes
      const isJPEG = buffer[0] === 0xff && buffer[1] === 0xd8;
      const isPNG =
        buffer[0] === 0x89 &&
        buffer[1] === 0x50 &&
        buffer[2] === 0x4e &&
        buffer[3] === 0x47;
      const isGIF =
        buffer[0] === 0x47 && buffer[1] === 0x49 && buffer[2] === 0x46;
      const isWebP =
        buffer[8] === 0x57 &&
        buffer[9] === 0x45 &&
        buffer[10] === 0x42 &&
        buffer[11] === 0x50;

      if (!isJPEG && !isPNG && !isGIF && !isWebP) {
        console.warn('⚠️ Warning: File may not be a valid image format');
      }

      const filename = `upload-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}.${extension}`;

      console.log(
        `📁 Creating file upload: ${filename} (${buffer.length} bytes, ${mimetype})`,
      );

      // Create a proper FileUpload-compatible object that matches graphql-upload format
      const fileUpload = {
        filename,
        mimetype,
        encoding: 'base64',
        createReadStream: () => {
          const stream = new Readable();
          stream.push(buffer);
          stream.push(null); // End the stream
          return stream;
        },
      };

      return Promise.resolve(fileUpload);
    } catch (error) {
      console.error('❌ Error creating file upload:', error);
      throw new BadRequestException(`Invalid image data: ${error.message}`);
    }
  }

  private transformToResponseDto(page: any): ConstructedPageResponseDto {
    return {
      id: page.id,
      type: page.type,
      post_date: page.post_date,
      is_posted: page.is_posted,
      constructed_page_company_id: page.constructed_page_company_id,
      created_at: page.created_at,
      updated_at: page.updated_at,
      meta_info: page.meta_info,
      blocks: page.blocks,
      preview: page.preview,
    };
  }
}
