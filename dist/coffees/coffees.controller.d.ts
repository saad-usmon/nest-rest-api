import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
export declare class CoffeesController {
    private readonly coffeesService;
    constructor(coffeesService: CoffeesService);
    getAll(): Promise<import("./entities/entities.entity").Coffee[]>;
    findOne(id: number): Promise<import("./entities/entities.entity").Coffee>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<import("./entities/entities.entity").Coffee>;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<import("./entities/entities.entity").Coffee>;
    delete(id: string): Promise<import("./entities/entities.entity").Coffee>;
    deleteAll(): void;
}
