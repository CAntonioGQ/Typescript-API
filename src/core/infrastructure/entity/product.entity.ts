import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne
  } from "typeorm";
import { Price } from "./price.entity";
  
  @Entity({name: 'products'})
  export class Product {
    @PrimaryGeneratedColumn({name:'id_product', type: "integer"})
    idProduct!: number;
  
    @Column({name:'product', type:"varchar"})
    product!: string;

    @Column({name:'description', type:"varchar"})
    description!: string;

    @ManyToOne(() => Price)
    @JoinColumn({name: 'id_price'})
    price!: Price;
  
    @Column({name:'status', type:"integer"})
    status!: number;
    
    @CreateDateColumn()
    createdAt!: Date;
    
    @UpdateDateColumn()
    updatedAt!: Date;
  }