
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
  } from "typeorm";
  
  import { Branch } from './branch.entity';
  
  @Entity({name: 'employee'})
  export class Employee {
    @PrimaryGeneratedColumn({name:'id_employee', type: "integer"})
    idEmployee!: number;

    @ManyToOne(() => Branch)
    @JoinColumn({name: 'id_branch'})  
    branch!: Branch;
  
    @Column({name:'name', type:"varchar"})
    name!: string;
  
    @Column({name:'number', type:"varchar"})
    number!: string;

    @Column({name:'email', type:"varchar"})
    email!: string;

    @Column({name:'address', type: "varchar"})
    address!: string
  
    @CreateDateColumn()
    createdAt!: Date;
    
    @UpdateDateColumn()
    updatedAt!: Date;
  }