import { INestApplication } from '@nestjs/common';
import { Configuration } from './configuration.config';

export class ConfigurationModule {
  protected app: INestApplication;
  private readonly configurations: Configuration[] = [];

  constructor(app: INestApplication) {
    this.app = app;
  }

  public setup() {
    this.configurations.forEach((config) => config.setup(this.app));
  }

  public addConfig(config: Configuration) {
    this.configurations.push(config);
  }
}
