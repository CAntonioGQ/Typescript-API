import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  OneToMany, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn } 
  from 'typeorm';
  
import { Product } from './product.entity';

@Entity({name: 'inventory'})
export class Inventory {
  @PrimaryGeneratedColumn({name:'id_inventory', type: "integer"})
  idInventory!: number;

  @OneToMany(() => Product, product => product.inventory)
  products!: Product[]

  @Column({name:'quantity', type:"varchar"})  
  quantity!: string;

  @CreateDateColumn()
  createdAt!: Date;
  
  @UpdateDateColumn()
  updatedAt!: Date;
}