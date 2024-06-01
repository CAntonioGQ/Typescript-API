import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
  
  @Entity({name: 'employee'})
  export class Employee {
    @PrimaryGeneratedColumn({name:'id_employee', type: "integer"})
    idEmployee!: number;
  
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