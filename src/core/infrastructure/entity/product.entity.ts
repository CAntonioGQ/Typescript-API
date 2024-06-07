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
import { Inventory } from "./inventory.entity";
  
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
  
    @ManyToOne(() => Inventory)
    @JoinColumn({name: 'id_inventory'})
    inventory!: Inventory; 

    @Column({name:'status', type:'number'})
    status!: number;

    @CreateDateColumn()
    createdAt!: Date;
    
    @UpdateDateColumn()
    updatedAt!: Date;
  }