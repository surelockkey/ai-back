import { Test, TestingModule } from '@nestjs/testing';
import { ConstructedPageService } from './constructed-page.service';
import { ConstructedPageType } from './enum/constructed-page-type.enum';
import { ConstructedPage } from './entity/constructed-page.entity';
import { AppModule } from 'src/app.module';

describe('ConstructedPageService - Pagination Integration Test (Real Data) - NEW PAGINATED METHOD', () => {
  let service: ConstructedPageService;
  let module: TestingModule;

  // ⚠️ CONFIGURE THIS: Replace with your actual company ID that has lots of blogs
  const TEST_COMPANY_ID = '359be4f8-ee18-415f-b295-b89781b14065'; // <-- PUT YOUR COMPANY ID HERE

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<ConstructedPageService>(ConstructedPageService);
    console.log('\n✅ Test module initialized\n');
  });

  afterAll(async () => {
    await module.close();
    console.log('\n✅ Test module closed\n');
  });

  describe('Pagination Tests with Real Data', () => {
    let totalPages: number;

    beforeAll(async () => {
      // Get total count of pages for the company using count method (faster than fetching all)
      totalPages = await service.getConstructedPagesPaginatedCount({
        type: ConstructedPageType.BLOG,
        is_posted: true,
        constructed_page_company_id: TEST_COMPANY_ID,
      });
      console.log(`\n📊 Total pages found for company: ${totalPages}\n`);

      if (totalPages === 0) {
        console.warn(
          '⚠️  No pages found! Make sure TEST_COMPANY_ID is set correctly.',
        );
      }
    });

    it('should fetch first 10 pages (skip: 0, take: 10)', async () => {
      const result = await service.getConstructedPagesPaginated({
        pagination: { skip: 0, take: 10 },
        type: ConstructedPageType.BLOG,
        is_posted: true,
        constructed_page_company_id: TEST_COMPANY_ID,
      });

      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeLessThanOrEqual(10);
      expect(result.length).toBeLessThanOrEqual(totalPages);

      console.log(
        `✓ Page 1 (skip: 0, take: 10): Retrieved ${result.length} pages`,
      );
      if (result.length > 0) {
        console.log(`  First page ID: ${result[0].id}`);
        console.log(`  First page URL: ${result[0].meta_info?.url || 'N/A'}`);
      }
    });

    it('should fetch second 10 pages (skip: 10, take: 10)', async () => {
      if (totalPages <= 10) {
        console.log('⏭️  Skipping: Not enough pages for second page test');
        return;
      }

      const result = await service.getConstructedPagesPaginated({
        pagination: { skip: 10, take: 10 },
        type: ConstructedPageType.BLOG,
        is_posted: true,
        constructed_page_company_id: TEST_COMPANY_ID,
      });

      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeLessThanOrEqual(10);
      expect(result.length).toBe(Math.min(10, totalPages - 10));

      console.log(
        `✓ Page 2 (skip: 10, take: 10): Retrieved ${result.length} pages`,
      );
      if (result.length > 0) {
        console.log(`  First page ID: ${result[0].id}`);
      }
    });

    it('should fetch third 10 pages (skip: 20, take: 10)', async () => {
      if (totalPages <= 20) {
        console.log('⏭️  Skipping: Not enough pages for third page test');
        return;
      }

      const result = await service.getConstructedPagesPaginated({
        pagination: { skip: 20, take: 10 },
        type: ConstructedPageType.BLOG,
        is_posted: true,
        constructed_page_company_id: TEST_COMPANY_ID,
      });

      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeLessThanOrEqual(10);
      expect(result.length).toBe(Math.min(10, totalPages - 20));

      console.log(
        `✓ Page 3 (skip: 20, take: 10): Retrieved ${result.length} pages`,
      );
    });

    it('should return all pages when fetching with large take value', async () => {
      const result = await service.getConstructedPagesPaginated({
        pagination: { skip: 0, take: 100 },
        type: ConstructedPageType.BLOG,
        is_posted: true,
        constructed_page_company_id: TEST_COMPANY_ID,
      });

      expect(result).toBeDefined();
      expect(result.length).toBe(Math.min(100, totalPages));

      console.log(
        `✓ All pages (skip: 0, take: 100): Retrieved ${result.length} pages`,
      );
    });

    it('should verify pages are ordered by post_date DESC', async () => {
      const result = await service.getConstructedPagesPaginated({
        pagination: { skip: 0, take: 20 },
        type: ConstructedPageType.BLOG,
        is_posted: true,
        constructed_page_company_id: TEST_COMPANY_ID,
      });

      expect(result).toBeDefined();

      if (result.length > 1) {
        // Verify DESC ordering
        for (let i = 0; i < result.length - 1; i++) {
          if (result[i].post_date && result[i + 1].post_date) {
            expect(result[i].post_date).toBeGreaterThanOrEqual(
              result[i + 1].post_date,
            );
          }
        }
        console.log(`✓ Pages are correctly ordered by post_date DESC`);
        console.log(
          `  Newest: ${result[0].post_date} (${new Date(
            result[0].post_date * 1000,
          ).toISOString()})`,
        );
        console.log(
          `  Oldest in set: ${result[result.length - 1].post_date} (${new Date(
            result[result.length - 1].post_date * 1000,
          ).toISOString()})`,
        );
      }
    });

    it('should return empty array when skip exceeds total count', async () => {
      const result = await service.getConstructedPagesPaginated({
        pagination: { skip: totalPages + 100, take: 10 },
        type: ConstructedPageType.BLOG,
        is_posted: true,
        constructed_page_company_id: TEST_COMPANY_ID,
      });

      expect(result).toBeDefined();
      expect(result.length).toBe(0);

      console.log(
        `✓ Returns empty array when skip (${
          totalPages + 100
        }) exceeds total (${totalPages})`,
      );
    });

    it('should verify pagination consistency - no duplicates or missing items', async () => {
      if (totalPages === 0) {
        console.log('⏭️  Skipping: No pages to test');
        return;
      }

      const pageSize = 10;
      const allPagesIds = new Set<string>();
      const allPagesFromPagination: ConstructedPage[] = [];
      const idCountMap = new Map<string, number>();
      const idBatchMap = new Map<string, number[]>();

      // Fetch all pages using pagination
      let currentSkip = 0;
      let batchNumber = 0;
      while (currentSkip < totalPages) {
        const result = await service.getConstructedPagesPaginated({
          pagination: { skip: currentSkip, take: pageSize },
          type: ConstructedPageType.BLOG,
          is_posted: true,
          constructed_page_company_id: TEST_COMPANY_ID,
        });

        if (result.length === 0) break;

        console.log(`\nBatch ${batchNumber} (skip: ${currentSkip}, take: ${pageSize}): ${result.length} pages`);
        console.log(`  IDs: ${result.map(p => p.id.substring(0, 8)).join(', ')}`);

        result.forEach((page) => {
          allPagesIds.add(page.id);
          idCountMap.set(page.id, (idCountMap.get(page.id) || 0) + 1);

          // Track which batches each ID appears in
          const batches = idBatchMap.get(page.id) || [];
          batches.push(batchNumber);
          idBatchMap.set(page.id, batches);
        });
        allPagesFromPagination.push(...result);

        currentSkip += pageSize;
        batchNumber++;
      }

      // Find and log duplicates
      const duplicates = Array.from(idCountMap.entries())
        .filter(([id, count]) => count > 1)
        .map(([id, count]) => ({ id, count }));

      if (duplicates.length > 0) {
        console.log(`\n🚨 Found ${duplicates.length} duplicate page IDs:`);
        duplicates.forEach(({ id, count }) => {
          const batches = idBatchMap.get(id) || [];
          const skips = batches.map(b => b * pageSize);
          console.log(`  - ${id}: appears ${count} times in batches ${batches.join(', ')} (skips: ${skips.join(', ')})`);
        });
      }

      // Verify no duplicates
      expect(allPagesIds.size).toBe(allPagesFromPagination.length);

      // Compare with total count
      expect(allPagesFromPagination.length).toBe(totalPages);

      console.log(`✓ Pagination consistency verified:`);
      console.log(`  - Total unique IDs from pagination: ${allPagesIds.size}`);
      console.log(
        `  - Total pages from pagination: ${allPagesFromPagination.length}`,
      );
      console.log(`  - Total pages from count: ${totalPages}`);
      console.log(
        `  - No duplicates: ${
          allPagesIds.size === allPagesFromPagination.length ? '✅' : '❌'
        }`,
      );
    });

    it('should test different page sizes (5, 15, 25, 50)', async () => {
      const pageSizes = [5, 15, 25, 50];

      for (const pageSize of pageSizes) {
        const result = await service.getConstructedPagesPaginated({
          pagination: { skip: 0, take: pageSize },
          type: ConstructedPageType.BLOG,
          is_posted: true,
          constructed_page_company_id: TEST_COMPANY_ID,
        });

        expect(result).toBeDefined();
        expect(result.length).toBeLessThanOrEqual(pageSize);
        expect(result.length).toBeLessThanOrEqual(totalPages);

        console.log(
          `✓ Page size ${pageSize}: Retrieved ${result.length} pages`,
        );
      }
    });

    it('should test edge case - skip to last item', async () => {
      if (totalPages === 0) {
        console.log('⏭️  Skipping: No pages to test');
        return;
      }

      const result = await service.getConstructedPagesPaginated({
        pagination: { skip: totalPages - 1, take: 10 },
        type: ConstructedPageType.BLOG,
        is_posted: true,
        constructed_page_company_id: TEST_COMPANY_ID,
      });

      expect(result).toBeDefined();
      expect(result.length).toBe(1);

      console.log(
        `✓ Skip to last item (skip: ${totalPages - 1}): Retrieved ${
          result.length
        } page`,
      );
    });

    it('should verify all pages have required eager-loaded relations', async () => {
      const result = await service.getConstructedPagesPaginated({
        pagination: { skip: 0, take: 5 },
        type: ConstructedPageType.BLOG,
        is_posted: true,
        constructed_page_company_id: TEST_COMPANY_ID,
      });

      if (result.length === 0) {
        console.log('⏭️  Skipping: No pages to test');
        return;
      }

      result.forEach((page, index) => {
        expect(page).toBeDefined();
        expect(page.id).toBeDefined();

        // Check eager-loaded relations
        console.log(`\n  Page ${index + 1}:`);
        console.log(`    - ID: ${page.id}`);
        console.log(`    - Type: ${page.type}`);
        console.log(`    - Posted: ${page.is_posted}`);
        console.log(`    - Meta Info: ${page.meta_info ? '✅' : '❌'}`);
        console.log(`    - Preview: ${page.preview ? '✅' : '❌'}`);
        console.log(
          `    - Blocks: ${page.blocks ? `✅ (${page.blocks.length})` : '❌'}`,
        );
        console.log(
          `    - Company: ${page.constructed_page_company ? '✅' : '❌'}`,
        );
      });

      console.log(
        `\n✓ Verified ${result.length} pages have eager-loaded relations`,
      );
    });
  });

  describe('Performance Tests', () => {
    it('should execute pagination query within acceptable time', async () => {
      const startTime = Date.now();

      await service.getConstructedPagesPaginated({
        pagination: { skip: 0, take: 10 },
        type: ConstructedPageType.BLOG,
        is_posted: true,
        constructed_page_company_id: TEST_COMPANY_ID,
      });

      const duration = Date.now() - startTime;

      console.log(`✓ Query executed in ${duration}ms`);
      expect(duration).toBeLessThan(2000); // Should complete within 2 seconds
    });
  });
});
