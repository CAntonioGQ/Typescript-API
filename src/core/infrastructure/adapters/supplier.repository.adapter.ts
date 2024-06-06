import { NotFound } from "http-errors";
import database from "../../../config/database/database";
import { SupplierRepository, Id, Query } from "../../domain/repository/supplier.repository";
import { Supplier } from "../entity/supplier.entity";
import { SupplierModel } from "../../domain/models/supplier";


export class SupplierAdapterRepository implements SupplierRepository<Supplier>{
    async create(data: Partial<Supplier>, query?: Query): Promise<Supplier> {
        const repository = database.getRepository(Supplier);
        const supplier = repository.create({...data,
          status: SupplierModel.ENABLE
    });
        await repository.save(supplier);
        return supplier;
      }
    
      async list(query?: Query): Promise<Supplier[]> {
        const repository = database.getRepository(Supplier);
        return repository.find();
      }
    
      async get(id: Id, query?: Query): Promise<Supplier> {
        const repository = database.getRepository(Supplier);
        const supplier = await repository.findOneBy({ idSupplier: 6 as number });
        if (!supplier) {
          throw new NotFound("Supplier does not exist");
        }
        return supplier;
      }
    
      async update(id: Id, data: Supplier, query?: Query): Promise<Supplier> {
        const repository = database.getRepository(Supplier);
        await repository.update(id, data);
        return this.get(id, query);
      }
    
      async remove(id: Id, query?: Query): Promise<Supplier> {
        const repository = database.getRepository(Supplier);
        const supplier = await this.get(id, query);
        if(!supplier){
          throw new NotFound("Supplier Not Found")
        }
        supplier.status = SupplierModel.DELETE
        await repository.save(supplier);
        return supplier;
      }
}