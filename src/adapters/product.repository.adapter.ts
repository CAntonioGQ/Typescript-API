import { NotFound } from "http-errors";
import database from "../config/database/database";
import { ProductRepository, Id, Query } from "../repository/product.repository";
import { Product } from "../entity/product.entity";
import { ProductModel } from "../models/product";

export class ProductAdapterRepository implements ProductRepository<Product> {
    async create(data: Partial<Product>, query?: Query): Promise<Product> {
        const repository = database.getRepository(Product);
        const product = repository.create({
            ...data,
        status: ProductModel.ENABLE
    });
        await repository.save(product);
        return product;
    }

    async list(query?: Query): Promise<Product[]> {
        const repository = database.getRepository(Product);
        return repository.find();
    }

    async get(id: Id, query?: Query): Promise<Product> {
        const repository = database.getRepository(Product);
        const product = await repository.findOneBy({ idProduct: id as number });
        if (!product) {
            throw new NotFound("No existe un producto con el id proporcionado");
        }
        return product;
    }

    async update(id: Id, data: Product, query?: Query): Promise<Product> {
        const repository = database.getRepository(Product);
        await repository.update(id, data);
        return this.get(id, query);
    }

    async remove(id: Id, query?: Query): Promise<Product> {
        const repository = database.getRepository(Product);
        const product = await this.get(id, query);
        if(!product){
            throw new NotFound("Product does not exist");
        }
        product.status = ProductModel.DELETE;
        await repository.save(product);
        return product;
    }
}
