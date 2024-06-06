import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
  } from "typeorm";
import { Order } from "./order.entity";
  
  @Entity({name: 'client'})
  export class Client {
    @PrimaryGeneratedColumn({name:'id_client', type: "integer"})
    idClient!: number;

    @ManyToOne(() => Order)
    @JoinColumn({name:'order_id'})
    order!: Order;
  
    @Column({name:'name', type:"varchar"})
    name!: string;
  
    @Column({name:'number', type:"varchar"})
    number!: string;

    @Column({name:'email', type:"varchar"})
    email!: string;
  
    @CreateDateColumn()
    createdAt!: Date;
    
    @UpdateDateColumn()
    updatedAt!: Date;
  }