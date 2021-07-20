import { INestApplication } from '@nestjs/common';

export interface Configuration {
  setup(app: INestApplication): any;
}
