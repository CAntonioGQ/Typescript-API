import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({name: 'inventories'})
export class Inventory {
  @PrimaryGeneratedColumn({name:'id_inventory', type: "integer"})
  idInventory!: number;

  @Column({name:'quantity', type:"varchar"})
  quantity!: string;
}