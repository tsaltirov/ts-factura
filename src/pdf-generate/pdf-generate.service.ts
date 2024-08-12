import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';

@Injectable()
export class PdfGenerateService {
generatePdf(res: Response) {
    const doc = new PDFDocument();

    // Configura la respuesta para enviar un PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=example.pdf');

    // Escribe el contenido del PDF
    doc.text('Hello, Prueba de PDF Factura.');

    // Finaliza el documento y envíalo
    doc.pipe(res);
    doc.end();
  }
}
