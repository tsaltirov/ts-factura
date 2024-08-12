import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type FacturaDocument = HydratedDocument<Factura>;

@Schema()
export class Factura extends Document{
  @Prop()
  numeroFactura: string;

  @Prop()
  fecha: string;

  @Prop()
  nombreEmisor: string;

  @Prop()
  nifEmisor: string;

  @Prop()
  direccionEmisor: string;

  @Prop()
  nombreReceptor: string;

  @Prop()
  nifReceptor: string;

  @Prop()
  descripcion: string;

  @Prop({type: mongoose.Schema.Types.Decimal128})
  baseImponible: mongoose.Schema.Types.Decimal128;

  @Prop()
  impuestos: string = '21%';

  @Prop({type: mongoose.Schema.Types.Decimal128})
  cuotaIva: mongoose.Schema.Types.Decimal128;

  @Prop({type: mongoose.Schema.Types.Decimal128})
  total: mongoose.Schema.Types.Decimal128 ;

  @Prop()
  formaPago: string ;


}

export const FacturaSchema = SchemaFactory.createForClass(Factura);