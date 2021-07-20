import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHello, UpdateHello } from './dto/hello-data.dto';
import { Hello } from './entities/Hello.entity';

@Injectable()
export class HelloService {
  private hellos: Hello[] = [];

  getOne(id: number): Hello {
    const hello = this.hellos.find((hello) => hello.id === id);
    if (!hello) {
      throw new NotFoundException(`Not found Hello ${id}`);
    }
    return hello;
  }

  getAll(): Hello[] {
    return this.hellos;
  }

  create(helloCreate: CreateHello): Hello {
    const hello = new Hello(
      this.hellos.length + 1,
      helloCreate.name,
      helloCreate.email,
      new Date().toLocaleString(),
    );

    this.hellos.push(hello);
    return hello;
  }

  update(id: number, helloUpdate: UpdateHello) {
    const hello = this.getOne(+id);
    this.delete(id);
    this.hellos.push({ ...hello, ...helloUpdate });
  }

  delete(id: number): boolean {
    this.getOne(id);
    this.hellos = this.hellos.filter((hello) => hello.id !== id);
    return true;
  }
}
