import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateHello, UpdateHello } from './dto/hello-data.dto';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getAll() {
    return this.helloService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `search year ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    console.log(typeof id);
    return this.helloService.getOne(id);
  }

  @Post()
  create(@Body() helloCreate: CreateHello) {
    return this.helloService.create(helloCreate);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.helloService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() helloUpdate: UpdateHello) {
    return this.helloService.update(id, helloUpdate);
  }
}
