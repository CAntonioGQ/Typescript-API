import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity({name:'order_details'})
export class OrderDetail {
  @PrimaryGeneratedColumn({name:'id_order_detail', type:'integer'})
  idOrderDetail!: number;

  @OneToOne(()=> Order, order => order.orderDetail)
  @JoinColumn()
  order!: Order;

  @Column({name:'quantity', type:'integer'})
  orderQuantity!: number;

  @Column({name:'price', type:'decimal'})
  orderPrice!: number;

  @Column({name:'status', type:'number'})
  status!: number;

  @CreateDateColumn()
  createdAt!: Date;
  
  @UpdateDateColumn()
  updatedAt!: Date;
}