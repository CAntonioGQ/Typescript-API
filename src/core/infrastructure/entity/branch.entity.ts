import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  OneToMany, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn }
 from "typeorm";


import { Employee } from "./employee.entity";
import { Sector } from './sector.entity';

@Entity ({name:'branches'})
export class Branch {
  @PrimaryGeneratedColumn({name:'id_branch', type:'integer'})
  idBranch!: number;

  @OneToMany(() => Employee, employee => employee.branch)
  employee!:Employee[];

  @ManyToOne(() => Sector)
  @JoinColumn({name: 'id_sector'})
  sector!: Sector;

  @Column({name:'name', type:'varchar'})
  branch!: Branch; 

  @Column({name:'status', type:'number'})
  status!: number;
  
  @CreateDateColumn()  
  createdAt!: Date;
  
  @UpdateDateColumn()
  updatedAt!: Date;
}