import { Controller,Get, Res  } from '@nestjs/common';
import { PdfGenerateService } from './pdf-generate.service';
import { Response } from 'express';

@Controller('pdf-generate')
export class PdfGenerateController {
  constructor(private readonly pdfGenerateService: PdfGenerateService) {}

  @Get()
  generatePdf(@Res() res: Response) {
    return this.pdfGenerateService.generatePdf(res);
  }
}
