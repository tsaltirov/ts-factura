import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Factura } from 'src/schemas/factura.schema';


@Injectable()
export class FacturasService {
  constructor(@InjectModel(Factura.name) private readonly facturaModel: Model<Factura>) {}
  async create(createFacturaDto: CreateFacturaDto): Promise<Factura> {
    const facturaCreada = await this.facturaModel.create(createFacturaDto);
    return facturaCreada.save();
  }

  findAll() {
    return `This action returns all facturas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factura`;
  }

  update(id: number, updateFacturaDto: UpdateFacturaDto) {
    return `This action updates a #${id} factura`;
  }

  remove(id: number) {
    return `This action removes a #${id} factura`;
  }
}
