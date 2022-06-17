import { IsArray, IsString, IsNotEmpty, IsNumberString } from 'class-validator';
// import { v4 as uuid } from 'uuid';

export class CreateCoffeeDto {
  //   @IsUUID()
  //   readonly id: uuid;
  //   @IsNotEmpty()
  //   @IsString()
  //   @IsNumberString()
  //   @IsString()
  readonly id: string;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly brand: string;
  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true })
  readonly flavors: string[];
}
