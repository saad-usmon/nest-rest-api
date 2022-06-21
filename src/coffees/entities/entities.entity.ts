import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // every entity creates sql table and the name of
//it is going to be a lowercase name of the classname => table === coffee

/*
         If we need another name for the table we can write it within the entitiy decorator!
         */
export class Coffee {
  @PrimaryGeneratedColumn() // not only make the column primary but it can help us to autoincrement it!
  id: string;
  @Column()
  name: string;
  @Column()
  brand: string;
  @Column('json', { nullable: true })
  flavors: string[];
}
