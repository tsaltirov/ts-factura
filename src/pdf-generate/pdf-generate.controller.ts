import { Body, Controller,Get, Param, Res  } from '@nestjs/common';
import { PdfGenerateService } from './pdf-generate.service';
import { Response } from 'express';


@Controller('pdf-generate')
export class PdfGenerateController {
  constructor(private readonly pdfGenerateService: PdfGenerateService) {}

  @Get(':id')
  generatePdf(@Res() res: Response, @Param('id') id:string) {
    return this.pdfGenerateService.generatePdf(res,id);
  }
}
