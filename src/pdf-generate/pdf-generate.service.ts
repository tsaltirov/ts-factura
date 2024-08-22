import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';

@Injectable()
export class PdfGenerateService {
  generatePdf(res: Response) {
    const doc = new PDFDocument();

    // Configura la respuesta para enviar un PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=factura.pdf');

    // Título
    doc.fontSize(20).text('Factura', { align: 'center' });
    doc.moveDown();

    // Encabezados de la tabla
    const startX = 100;
    const startY = doc.y;
    const colWidths = [200, 100, 100, 100]; // Anchuras de las columnas
    doc.fontSize(12).text('Descripción', startX, startY, {
      width: colWidths[0],
      align: 'left',
    });
    doc.text('Cantidad', startX + colWidths[0], startY, {
      width: colWidths[1],
      align: 'left',
    });
    doc.text('Precio', startX + colWidths[0] + colWidths[1], startY, {
      width: colWidths[2],
      align: 'left',
    });
    doc.text(
      'Importe',
      startX + colWidths[0] + colWidths[1] + colWidths[2],
      startY,
      { width: colWidths[3], align: 'left' },
    );
    doc.moveDown();

    // Separador de la tabla
    doc
      .moveTo(startX, doc.y)
      .lineTo(startX + colWidths.reduce((a, b) => a + b, 0), doc.y)
      .stroke();
    doc.moveDown(0.5);

    // Datos de ejemplo
    const descriptions = ['Descripción 1', 'Descripción 2'];
    const quantities = [5, 3];
    const prices = [100, 200];
    const totals = [500, 600];

    // Recorriendo los arrays para generar las filas
    for (let i = 0; i < descriptions.length; i++) {
      const rowY = doc.y;
      doc.text(descriptions[i], startX, rowY, {
        width: colWidths[0],
        align: 'left',
      });
      doc.text(quantities[i].toString(), startX + colWidths[0], rowY, {
        width: colWidths[1],
        align: 'left',
      });
      doc.text(
        prices[i].toString(),
        startX + colWidths[0] + colWidths[1],
        rowY,
        { width: colWidths[2], align: 'left' },
      );
      doc.text(
        totals[i].toString(),
        startX + colWidths[0] + colWidths[1] + colWidths[2],
        rowY,
        { width: colWidths[3], align: 'left' },
      );
      doc.moveDown();
    }

    // Separador final
    doc
      .moveTo(startX, doc.y)
      .lineTo(startX + colWidths.reduce((a, b) => a + b, 0), doc.y)
      .stroke();
    doc.moveDown(1);

    // Cálculo del total general
    const totalGeneral = totals.reduce((acc, cur) => acc + cur, 0);
    doc
      .fontSize(12)
      .text(
        `Total: ${totalGeneral}`,
        startX + colWidths[0] + colWidths[1] + colWidths[2],
        doc.y,
        { align: 'left' },
      );

    // Finaliza el documento y envíalo
    doc.pipe(res);
    doc.end();
  }
}
