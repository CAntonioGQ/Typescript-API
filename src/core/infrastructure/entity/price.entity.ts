import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  OneToMany, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn
} from "typeorm";
import { Product } from "./product.entity";


@Entity({name: 'prices'})
export class Price {
  @PrimaryGeneratedColumn({name:'id_price', type: "integer"})
  idPrice!: number;

  @Column({name:'price', type:"varchar"})
  price!: string;

  @OneToMany(() => Product, product => product.price)
  products!: Product[];

  @Column({name:'status', type:'integer'})
  status!: number;
  
  @CreateDateColumn()
  createdAt!: Date;
  
  @UpdateDateColumn()
  updatedAt!: Date;
}