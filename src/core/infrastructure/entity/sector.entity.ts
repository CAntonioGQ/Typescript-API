import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  OneToMany, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";
import { Branch } from "./branch.entity";

@Entity({name:'sector'}) 
  export class Sector{
  @PrimaryGeneratedColumn({name:'id_sector', type:'integer'})
  idSector!: number;

  @OneToMany(() => Branch, branch => branch.sector)
  branch!: Branch[];

  @Column({name:'sector', type:'varchar'})
  sector!: string;

  @CreateDateColumn() 
  createdAt!: Date;
    
  @UpdateDateColumn()
  updatedAt!: Date;

}