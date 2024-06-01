import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
  
  @Entity()
  export class Product {
    @PrimaryGeneratedColumn({name:'id_product', type: "integer"})
    idProduct!: number;
  
    @Column({name:'product', type:"varchar"})
    product!: string;
  
    @CreateDateColumn()
    createdAt!: Date;
    
    @UpdateDateColumn()
    updatedAt!: Date;
  }