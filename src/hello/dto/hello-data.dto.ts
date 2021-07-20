import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class CreateHello {
  @IsString()
  name: string;
  @IsString()
  email: string;
}

export class UpdateHello extends PartialType(CreateHello) {}
