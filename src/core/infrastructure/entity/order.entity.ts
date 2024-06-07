import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  ManyToOne, 
  OneToMany, 
  OneToOne, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";

import { Client } from "./client.entity";
import { OrderDetail } from "./order_detail";

@Entity({name:'orders'})
export class Order {
  @PrimaryGeneratedColumn({name:'id_order', type:'integer'})
  idOrder!: number; 

  @ManyToOne(() => Client) // Corregir la relación a ManyToOne
  client!: Client;

  @OneToOne(() => OrderDetail, orderDetail => orderDetail.order)
  orderDetail!: OrderDetail;

  @Column({name:'order_date', type:'date'})
  orderDate!: Date;

  @Column({name:'total_price', type:'decimal'})
  totalPrice!: number;

  @Column({name:'status', type:'integer'})
  status!: number;

  @CreateDateColumn()
  createdAt!: Date;
  
  @UpdateDateColumn()
  updatedAt!: Date;

}