import { NotFound } from 'http-errors';
import database from "../../../config/database/database";
import { PriceRepository, Id, Query } from "../../domain/repository/price.repository";
import { Price } from "../entity/price.entity";

import { ProductAdapterRepository } from "./product.repository.adapter";
import { PriceModel } from '../../domain/models/price';

export class PriceAdapterRepository implements PriceRepository<Price> {
  async create(data: Partial<Price>, query?: Query): Promise<Price> {
    const repository = database.getRepository(Price);
    const price = repository.create({
      ...data,
      status: PriceModel.ENABLE
    });
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

    // Verifica si el precio tiene relación con algún producto
    const productRepository = new ProductAdapterRepository();
    const products = await productRepository.list();
    const relatedProducts = products.filter(product => Number(product?.price) === price.idPrice);

    if (relatedProducts.length > 0) {
        throw new Error("No se puede eliminar el precio, ya que está relacionado con uno o más productos.");
    }
    price.status = PriceModel.DELETE
    await repository.save(price);
    return price;
}
}