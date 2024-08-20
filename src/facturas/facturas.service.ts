import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import {  InjectModel } from '@nestjs/mongoose';
import {  Model } from 'mongoose';
import { Factura } from 'src/schemas/factura.schema';


@Injectable()
export class FacturasService {
  constructor(@InjectModel(Factura.name) private readonly facturaModel: Model<Factura>) {}
  async create(createFacturaDto: CreateFacturaDto): Promise<Factura> {
    const facturaCreada = await this.facturaModel.create(createFacturaDto);
    return facturaCreada.save();
  }

  //Lista todas las facturas
  async findAll() {
    try {
      const facturas = await this.facturaModel.find();
      return facturas;
    } catch (error) {
      throw new NotFoundException({

        error: 'No encontrados',
      })
    }
  }

  //busca factura por id
  async findOne(id: string) {
    try {
      const facturaEncontrada = await this.facturaModel.findById(id);
      return facturaEncontrada;

    } catch (error) {
      throw new NotFoundException({

        error: 'No encontrado',
      })
    }
  }

  //por ahora no se implementa
  update(id: number, updateFacturaDto: UpdateFacturaDto) {
    return `This action updates a #${id} factura`;
  }

  //por ahora no se implementa
  remove(id: number) {
    return `This action removes a #${id} factura`;
  }
}
