import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
  
  @Entity()
  export class Client {
    @PrimaryGeneratedColumn({name:'id_client', type: "integer"})
    idClient!: number;
  
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