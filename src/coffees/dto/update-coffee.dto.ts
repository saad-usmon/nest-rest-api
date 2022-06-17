import { IsString, IsArray, IsNotEmpty } from 'class-validator';

export class UpdateCoffeeDto {
  @IsString()
  @IsNotEmpty()
  readonly name?: string;
  @IsNotEmpty()
  @IsString()
  readonly brand?: string;
  @IsArray()
  @IsNotEmpty()
  readonly flavors?: string[];
}
