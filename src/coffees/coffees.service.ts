import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/entities.entity';

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
    id = id;
    return this.coffees.find((c) => c.id === id);
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
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
      return `There is no coffee found with that id! :(`;
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((c) => c.id === id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, coffeeIndex + 1);
    } else {
      return 'There is no coffee found with this id! :(';
    }
  }
}
