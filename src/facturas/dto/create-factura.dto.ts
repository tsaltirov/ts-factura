import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDecimal, IsEmail, IsNotEmpty, IsString } from "class-validator";
import mongoose from "mongoose";

export class CreateFacturaDto {

    @ApiProperty({
        example: '25',
        description: 'numeroFactura',
        format: 'string',
    })
    @IsString()
    @IsNotEmpty()
    numeroFactura: string;

    @ApiProperty({
        example: '10-08-2024',
        description: 'fecha',
        format: 'string',
    })
    @IsString()
    @IsNotEmpty()
    fecha: string;

    @ApiProperty({
        example: 'Todor',
        description: 'nombreEmisor',
        format: 'string',
    })
    @IsString()
    @IsNotEmpty()
    nombreEmisor: string;

    @ApiProperty({
        example: '1234',
        description: 'nifEmisor',
        format: 'string',
    })
    @IsString()
    @IsNotEmpty()
    nifEmisor: string;

    @ApiProperty({
        example: '1234456',
        description: 'telefono',
        format: 'string',
    })
    @IsString()
    @IsNotEmpty()
    telefono: string;

    @ApiProperty({
        example: 'calle pin-pong1',
        description: 'direccionEmisor',
        format: 'string',
    })
    @IsString()
    @IsNotEmpty()
    direccionEmisor: string;

    @ApiProperty({
        example: 'calle veinte',
        description: 'direccionReceptor',
        format: 'string',
    })
    @IsString()
    @IsNotEmpty()
    direccionReceptor: string;

    @ApiProperty({
        example: 'Paco',
        description: 'nombreReceptor',
        format: 'string',
    })
    @IsString()
    @IsNotEmpty()
    nombreReceptor: string;

    @ApiProperty({
        example: ['factura de la luz','jjajaja'],
        description: 'descripcion',
        format: 'string',
    })
    @IsArray()
    @IsNotEmpty()
    descripcion: string [];

    @ApiProperty({
        example: [2,3],
        description: 'cantidad (horas)',
        format: 'number',
    })
    @IsArray()
    @IsNotEmpty()
    cantidad: number [];

    @ApiProperty({
        example: [33.5,22.5],
        description: 'precio',
        format: 'numbernp',
    })
    @IsArray()
    @IsNotEmpty()
    precio: number [];

    @ApiProperty({
        example: [55.5,48.6],
        description: 'importe',
        format: 'number',
    })
    @IsArray()
    @IsNotEmpty()
    importe: number [];

    @ApiProperty({
        example: 22.5,
        description: 'baseImponible',
        format: 'decimal',
    })
    
    @IsNotEmpty()
    baseImponible: number;

    @ApiProperty({
        example: '21%',
        description: 'impuestos',
        format: 'string',
    })
    @IsString()
    @IsNotEmpty()
    impuestos: string = "21%";

    @ApiProperty({
        example: '5.75',
        description: 'cuotaIva',
        format: 'decimal',
    })
    
    @IsNotEmpty()
    cuotaIva: number;

    @ApiProperty({
        example: '27.25',
        description: 'total',
        format: 'decimal',
    })
    
    @IsNotEmpty()
    total: number;

    @ApiProperty({
        example: 'Tarjeta',
        description: 'formatoPago',
        format: 'string',
    })
    @IsString()
    @IsNotEmpty()
    formaPago: string;
}
