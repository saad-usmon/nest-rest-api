import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  getAll() {
    // const { limit, offset } = parametresQuery;
    return this.coffeesService.getAll();
    // return `This action returns all the coffees. Limit: ${limit} and Offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post('newCreated')
  // @HttpCode(HttpStatus.ACCEPTED)
  create(@Body() body) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }

  @Delete('remove/all')
  deleteAll() {
    return this.coffeesService.removeAll();
  }
}
