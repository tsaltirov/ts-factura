import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  //Para la configuración global de pipes 
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, 
    })
  );

  
  const config = new DocumentBuilder()
  .setTitle('TS-Factura Backend')
  .setDescription('Api endpoints')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config); //puedo cambiar, tema, colores, etc
  SwaggerModule.setup('api', app, document); // se crea en el endpoint api, va a envial la app y nuestro documento
  
  await app.listen(3000);
  Logger.log(`App running on port 3000`);
}
bootstrap();
