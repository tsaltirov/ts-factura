import { Test, TestingModule } from '@nestjs/testing';
import { PdfGenerateController } from './pdf-generate.controller';
import { PdfGenerateService } from './pdf-generate.service';

describe('PdfGenerateController', () => {
  let controller: PdfGenerateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfGenerateController],
      providers: [PdfGenerateService],
    }).compile();

    controller = module.get<PdfGenerateController>(PdfGenerateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
