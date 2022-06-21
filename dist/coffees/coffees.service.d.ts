import { Coffee } from './entities/entities.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Repository } from 'typeorm';
export declare class CoffeesService {
    private readonly coffeeRepository;
    constructor(coffeeRepository: Repository<Coffee>);
    getAll(): Promise<Coffee[]>;
    findOne(id: string): Promise<Coffee>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<Coffee>;
    update(id: string, updateCoffeeDto: any): Promise<Coffee>;
    remove(id: string): Promise<Coffee>;
    removeAll(): void;
}
