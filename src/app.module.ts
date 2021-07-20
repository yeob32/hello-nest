import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { CoreModule } from './core/core.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [HelloModule, CoreModule, CommonModule],
})
export class AppModule {}
