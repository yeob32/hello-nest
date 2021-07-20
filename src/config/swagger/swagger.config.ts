import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Configuration } from '../configuration.config';

export class SwaggerConfig implements Configuration {
  setup(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('hello-nest')
      .setDescription('The Hello API description')
      .setVersion('1.0')
      .addTag('hello')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/swagger-ui', app, document);
  }
}
