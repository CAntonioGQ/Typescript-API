import { NotFound } from 'http-errors';
import database from '../../../config/database/database';
import { InventoryRepository, Id, Query } from '../../domain/repository/inventory.repository';
import { Inventory } from '../entity/inventory.entity';
import { InventoryModel } from '../../domain/models/inventory';


export class InventoryAdapterRepository implements InventoryRepository<Inventory> {
  async create(data: Partial<Inventory>, query?: Query): Promise<Inventory> {
    const repository = database.getRepository(Inventory);
    const inventory = repository.create({
      ...data,
      status: InventoryModel.ENABLE
    });
    await repository.save(inventory);
    return inventory;
  }
  async list(query?: Query): Promise<Inventory[]> {
    const repository = database.getRepository(Inventory);
    return repository.find();
  }

  async get(id: Id, query?: Query): Promise<Inventory> {
    const repository = database.getRepository(Inventory);
    const inventory = await repository.findOneBy({ idInventory: id as number });
    if (!inventory) {
      throw new NotFound("No existe inventario con el id proporcionado");
    }
    return inventory;
  }

  async update(id: Id, data: Inventory, query?: Query): Promise<Inventory> {
    const repository = database.getRepository(Inventory);
    await repository.update(id, data);
    return this.get(id, query);
  }

  async remove(id: Id, query?: Query): Promise<Inventory> {
    const repository = database.getRepository(Inventory);
    const inventory = await this.get(id, query);
    if (!inventory) {
      throw new NotFound("Inventory does not exist");
    }
    inventory.status = InventoryModel.DELETE;
    await repository.save(inventory);
    return inventory;
  }
}
