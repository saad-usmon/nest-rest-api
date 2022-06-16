import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  getAll() {
    return 'There are any types of coffee flavors!';
  }
}
