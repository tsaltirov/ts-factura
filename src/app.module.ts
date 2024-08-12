import { Module } from '@nestjs/common';
import { PdfGenerateModule } from './pdf-generate/pdf-generate.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FacturasModule } from './facturas/facturas.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/ts-erp'), FacturasModule, PdfGenerateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
