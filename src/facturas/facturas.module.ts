import { Module } from '@nestjs/common';
import { FacturasService } from './facturas.service';
import { FacturasController } from './facturas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Factura,FacturaSchema} from 'src/schemas/factura.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Factura.name, schema: FacturaSchema }])],
  controllers: [FacturasController],
  providers: [FacturasService],
})
export class FacturasModule {}
