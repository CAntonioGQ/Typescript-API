import { NotFound } from 'http-errors';
import database from "../config/database/database";
import { PriceRepository, Id, Query } from "../repository/price.repository";
import { Price } from "../entity/price.entity";

export class PriceAdapterRepository implements PriceRepository<Price> {
  async create(data: Partial<Price>, query?: Query): Promise<Price> {
    const repository = database.getRepository(Price);
    const price = repository.create(data);
    await repository.save(price);
    return price;
  }

  async list(query?: Query): Promise<Price[]> {
    const repository = database.getRepository(Price);
    return repository.find();
  }

  async get(id: Id, query?: Query): Promise<Price> {
    const repository = database.getRepository(Price);
    const price = await repository.findOneBy({ idPrice: id as number });
    if (!price) {
      throw new NotFound("No existe un precio con el id proporcionado");
    }
    return price;
  }

  async update(id: Id, data: Price, query?: Query): Promise<Price> {
    const repository = database.getRepository(Price);
    await repository.update(id, data);
    return this.get(id, query);
  }

  async remove(id: Id, query?: Query): Promise<Price> {
    const repository = database.getRepository(Price);
    const price = await this.get(id, query);
    await repository.delete(id);
    return price;
  }

}