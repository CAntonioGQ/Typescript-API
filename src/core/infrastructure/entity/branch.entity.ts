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
  sectorName!: Sector;

  @Column({name:'name', type:'varchar'})
  branchName!: Branch; 

  @Column({name:'status', type:'integer'})
  status!: number;
  
  @CreateDateColumn()  
  createdAt!: Date;
  
  @UpdateDateColumn()
  updatedAt!: Date;
}