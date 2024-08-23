import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';
// import { FacturasService } from 'src/facturas/facturas.service';

@Injectable()
export class PdfGenerateService {
  // constructor(private readonly FacturaServicio: FacturasService) {}

  async generatePdf(res: Response, id_fact: string) {
    // Respuesta de la API (res) marcada opcional (?) mientras se trabaja con datos mock
    // Inicio de la factura mock:
    const dbItem = {
      '1234': {
        numeroFactura: 'FAC-2024-001',
        fecha: '2024-08-22',
        nombreEmisor: 'ACME Corporation',
        nifEmisor: 'B12345678',
        direccionEmisor: 'Calle Falsa 123, Madrid, España',
        direccionReceptor: 'Avenida Siempre Viva 742, Springfield, EE.UU.',
        nombreReceptor: 'Inversiones XYZ, S.L.',
        nifReceptor: 'B87654321',
        telefono: '+34 600 123 456',
        descripcion: ['Consultoría', 'Desarrollo de software'],
        cantidad: [5, 10],
        precio: [100, 80],
        importe: [500, 800],
        baseImponible: 12000.0,
        impuestos: '21%',
        cuotaIva: 2520.0,
        total: 14520.0,
        formaPago: 'Transferencia bancaria',
      }
    };

    // El ID de la factura está asignado manualmente de forma temporal.
    // En la versión final, este valor será recuperado de la base de datos usando el id_fact proporcionado.
    const gen_factura = dbItem['1234'];
    // Fin del mock

    try {
      /* Este bloque está comentado temporalmente mientras se desarrolla la integración con la base de datos.
         En la versión final, se utilizará el servicio FacturasService para obtener la factura desde la base de datos.

         const gen_factura = await this.FacturaServicio.findOne(id_fact);

      */

      // Recuperar toda la información de la factura en variables
      const nombre_cliente = gen_factura.nombreReceptor;
      const direccion_cliente = gen_factura.direccionReceptor;
      const telefono_cliente = gen_factura.telefono;
      const num_factura_cliente = gen_factura.numeroFactura;
      const fecha = gen_factura.fecha;
      const descripcion_cliente = gen_factura.descripcion;
      const cantidad_cliente = gen_factura.cantidad;
      const precio_cliente = gen_factura.precio;
      const importe_cliente = gen_factura.importe;
      const base_imponible = gen_factura.baseImponible;
      const impuestos = gen_factura.impuestos;
      const cuota_iva = gen_factura.cuotaIva;
      const total = gen_factura.total;
      const forma_pago = gen_factura.formaPago;

      // Inicio de la generación del PDF
      const doc = new PDFDocument();
      doc.pipe(res);

      // Header con datos generales
      doc.fontSize(20).text('Factura', { align: 'center' });
      doc.fontSize(10).text(`Número de Factura: ${num_factura_cliente}`);
      doc.text(`Fecha: ${fecha}`);
      doc.text(`Nombre del Emisor: ${gen_factura.nombreEmisor}`);
      doc.text(`NIF del Emisor: ${gen_factura.nifEmisor}`);
      doc.text(`Dirección del Emisor: ${gen_factura.direccionEmisor}`);
      doc.text(`Nombre del Receptor: ${nombre_cliente}`);
      doc.text(`NIF del Receptor: ${gen_factura.nifReceptor}`);
      doc.text(`Dirección del Receptor: ${direccion_cliente}`);
      doc.text(`Teléfono del Receptor: ${telefono_cliente}`);

      // Espacio antes de la tabla
      doc.moveDown();

      // Configuración de la tabla de datos
      const startX = 50;
      const startY = 300;
      const columnWidth = 150;
      const rowHeight = 25;

      // Encabezados de la tabla
      doc.fontSize(12).text('Descripción', startX, startY);
      doc.text('Cantidad', startX + columnWidth, startY);
      doc.text('Precio', startX + columnWidth * 2, startY);
      doc.text('Importe', startX + columnWidth * 3, startY);

      // Línea debajo de los encabezados
      doc
        .moveTo(startX, startY + rowHeight - 10)
        .lineTo(startX + columnWidth * 4, startY + rowHeight - 10)
        .stroke();

      // Filas de la tabla
      for (let i = 0; i < descripcion_cliente.length; i++) {
        const y = startY + rowHeight * (i + 1);
        doc.fontSize(10).text(descripcion_cliente[i], startX, y);
        doc.text(cantidad_cliente[i].toString(), startX + columnWidth, y);
        doc.text(
          precio_cliente[i].toFixed(2) + ' €',
          startX + columnWidth * 2,
          y,
        );
        doc.text(
          importe_cliente[i].toFixed(2) + ' €',
          startX + columnWidth * 3,
          y,
        );
      }
      
      // Fin del documento PDF
      doc.end();
    } catch (error) {
      throw new NotFoundException({
        error: 'No encotrado',
      });
    }
  }
}
