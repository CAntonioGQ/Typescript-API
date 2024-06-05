import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
  
  @Entity({name: 'supplier'})
  export class Supplier {
    @PrimaryGeneratedColumn({name:'supplier_id', type: "integer"})
    idSupplier!: number;
  
    @Column({name:'supplier_name', type:"varchar"})
    supplierName!: string;

    @Column({name:'contact_name', type:"varchar"})
    contactName!: string;

    @Column({name:'contact_email', type:"varchar"})
    contactEmail!: string;

    @Column({name:'contact_phone', type:"varchar"})
    contactPhone!: string;

    @Column({name:'contact_address', type:"varchar"})
    contactAddress!: string;

    @Column({name:'status', type:"integer"})
    status!: number;
  
    @CreateDateColumn()
    createdAt!: Date;
    
    @UpdateDateColumn()
    updatedAt!: Date;
  }