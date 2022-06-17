import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/entities.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: '1',
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  getAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((c) => c.id === id);
    if (!coffee) {
      throw new NotFoundException(`No data with this #${id}`);
    } else {
      return coffee;
    }
  }

  create(createCoffeeDto: any) {
    if (!createCoffeeDto) {
      throw new NotFoundException('Nothing available to update!');
    } else {
      createCoffeeDto.id = Math.floor(Math.random() * 10000).toString();
      return this.coffees.push(createCoffeeDto);
    }
  }

  update(id: string, updateCoffeeDto: any) {
    // const existingCoffee = this.findOne(id) || undefined;
    const index = this.coffees.findIndex((c) => c.id === id);
    const { name, brand, flavors } = updateCoffeeDto;
    if (index >= 0) {
      const newCoffee = {
        id: this.coffees[index].id,
        name: name || this.coffees[index].name,
        brand: brand || this.coffees[index].brand,
        flavors: flavors || this.coffees[index].flavors,
      };

      this.coffees[index] = newCoffee;
    } else {
      throw new NotFoundException(`There is no coffee found with #${id} :(`);
      // return `There is no coffee found with that id! :(`;
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((c) => c.id === id);
    if (coffeeIndex < 0) {
      throw new NotFoundException(`There is no coffee found with ${id}`);
    } else {
      return this.coffees.splice(coffeeIndex, coffeeIndex + 1);
    }
  }

  removeAll() {
    this.coffees.length = 0;
  }

  // generateID() {
  //   return Math.floor(Math.random() * 10000).toString();
  // }
}
