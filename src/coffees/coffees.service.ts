import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/entities.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeesService {
  // private coffees: Coffee[] = [
  //   {
  //     id: '1',
  //     name: 'Shipwreck Roast',
  //     brand: 'Buddy Brew',
  //     flavors: ['chocolate', 'vanilla'],
  //   },
  // ];

  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  getAll() {
    return this.coffeeRepository.find();
  }

  async findOne(id: string) {
    const coffee = (await this.coffeeRepository.findOneById(id)) || undefined;
    if (!coffee) {
      throw new NotFoundException(`No data with this #${id}`);
    } else {
      return coffee;
    }
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = this.coffeeRepository.create(createCoffeeDto);
    return this.coffeeRepository.save(coffee);
  }

  async update(id: string, updateCoffeeDto: any) {
    // const existingCoffee = this.findOne(id) || undefined;
    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee with id: ${id} not found`);
    } else {
      return this.coffeeRepository.save(coffee);
    }
  }

  async remove(id: string) {
    const coffee = await this.findOne(id);
    return this.coffeeRepository.remove(coffee);
  }

  removeAll() {
    // return this.coffeeRepository.delete()
  }

  // generateID() {
  //   return Math.floor(Math.random() * 10000).toString();
  // }
}
