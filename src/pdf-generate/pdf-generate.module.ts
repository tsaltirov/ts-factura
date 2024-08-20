import { Module } from '@nestjs/common';
import { PdfGenerateService } from './pdf-generate.service';
import { PdfGenerateController } from './pdf-generate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Factura, FacturaSchema } from 'src/schemas/factura.schema';
import { FacturasService } from 'src/facturas/facturas.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Factura.name, schema: FacturaSchema }])],
  controllers: [PdfGenerateController],
  providers: [PdfGenerateService,FacturasService],
})
export class PdfGenerateModule {}
