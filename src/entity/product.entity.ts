import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
  
  @Entity({name: 'products'})
  export class Product {
    @PrimaryGeneratedColumn({name:'id_product', type: "integer"})
    idProduct!: number;
  
    @Column({name:'product', type:"varchar"})
    product!: string;

    @Column({name:'description', type:"varchar"})
    description!: string;
  
    @Column({name:'status', type:"integer"})
    status!: number;
    
    @CreateDateColumn()
    createdAt!: Date;
    
    @UpdateDateColumn()
    updatedAt!: Date;
  }