import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  OneToMany, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";

import { Client } from "./client.entity";
import { OrderDetail } from "./order_detail";

@Entity({name:'orders'})
export class Order {
  @PrimaryGeneratedColumn({name:'id_order', type:'integer'})
  idOrder!: number; 

  @ManyToOne(() => Client, client => client.orders)
  @JoinColumn({ name: 'id_client' }) // Especificar la columna de la relación
  client!: Client;

  @OneToMany(() => OrderDetail, orderDetail => orderDetail.order)
  orderDetails!: OrderDetail[];

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