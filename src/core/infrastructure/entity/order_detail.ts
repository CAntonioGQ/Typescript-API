import { Column,
   CreateDateColumn,
   Entity,
   JoinColumn,
   ManyToOne,
   PrimaryGeneratedColumn,
   UpdateDateColumn
   } from "typeorm";
import { Order } from "./order.entity";

@Entity({name:'order_details'})
export class OrderDetail {
  @PrimaryGeneratedColumn({name:'id_order_detail', type:'integer'})
  idOrderDetail!: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'id_order' }) // Asegúrate de tener el nombre correcto de la columna en la tabla de detalles de orden que hace referencia a la orden
  order!: Order;

  @Column({name:'quantity', type:'integer'})
  orderQuantity!: number;

  @Column({name:'price', type:'decimal'})
  orderPrice!: number;

  @Column({name:'status', type:'integer'})
  status!: number;

  @CreateDateColumn()
  createdAt!: Date;
  
  @UpdateDateColumn()
  updatedAt!: Date;
}