import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';
import { FacturasService } from 'src/facturas/facturas.service';


@Injectable()
export class PdfGenerateService {
  
  constructor(private readonly FacturaServicio: FacturasService) {}
  
async generatePdf(res: Response, id_fact: string) {

  try{
  const gen_factura= await this.FacturaServicio.findOne(id_fact);
  const nombre_cliente=gen_factura.nombreReceptor;
  const direccion_cliente=gen_factura.direccionReceptor;
  const telefono_cliente=gen_factura.telefono;
  const num_factura_cliente=gen_factura.numeroFactura;
  const fecha=gen_factura.fecha;
  const descripcion_cliente=[gen_factura.descripcion];
  const cantidad_cliente=[gen_factura.baseImponible];
  
    //const prueba=resultado.numeroFactura;
    const doc = new PDFDocument({size: 'A4'});

    // Configura la respuesta para enviar un PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=example.pdf');

    doc.image('src/assets/logo_pdf.png', 50, 50, { width: 50 }); // Ajusta la posición y tamaño según sea necesario
    
    
    

    // Título de la factura
    doc.fontSize(20).text('TS-Factura', { align: 'center' });
    doc.moveDown(2);

    // Datos del cliente
    doc.fontSize(12).text('Cliente:' + ' ' + nombre_cliente);
    doc.text('Dirección:'+ ' '+ direccion_cliente);
    doc.text('Teléfono:'+ ' ' + telefono_cliente);
    doc.moveDown(1);

    // Datos de la factura
    doc.text('Número de factura:'+ ' ' + num_factura_cliente);
    doc.text('Fecha:' + ' ' + fecha);
    doc.moveDown(1);


    // Definir las columnas
const columns = ['Descripción', 'Cantidad', 'BaseImponible'];


// Establecer el ancho de las columnas y el espacio entre ellas
const columnWidth = 120;
const startX = 50;
const startY = 300;
const rowHeight = 40; // Altura de cada fila
const lineSpacing = 5; // Espacio entre líneas

// Dibujar encabezados
columns.forEach((col, index) => {
    doc.text(col, startX + index * columnWidth, startY + 10, { width: columnWidth, align: 'center' });
});

// Dibujar líneas de separación
doc.moveTo(startX, startY + 30).stroke();

descripcion_cliente.forEach((descripcion, index) => {
  doc.text(descripcion, startX, startY + 40 + (descripcion_cliente.length + index) * (rowHeight + lineSpacing), { width: 500, align: 'left' });
});

/*
// Dibujar datos
descripcion_cliente.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
        doc.text(cell, startX + colIndex * columnWidth, startY + 60 + rowIndex * (rowHeight + lineSpacing), { width: columnWidth, align: 'center' });
    });
    doc.moveTo(startX, startY + 40 + (rowIndex + 1) * (rowHeight + lineSpacing)).lineTo(startX + 500, startY + 40 + (rowIndex + 1) * (rowHeight + lineSpacing)).stroke();
});
*/



    // Finaliza el documento y envíalo
    doc.pipe(res);
    doc.end();
  }catch(error){
    throw new NotFoundException({
      
      error: 'No encotrado',
    })
  }
  }


  
}
