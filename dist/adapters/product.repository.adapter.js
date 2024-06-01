"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAdapterRepository = void 0;
const http_errors_1 = require("http-errors");
const database_1 = __importDefault(require("../config/database"));
const product_entity_1 = require("../entity/product.entity");
class ProductAdapterRepository {
    async create(data, query) {
        const repository = database_1.default.getRepository(product_entity_1.Product);
        const product = repository.create(data);
        await repository.save(product);
        return product;
    }
    async list(query) {
        const repository = database_1.default.getRepository(product_entity_1.Product);
        return repository.find();
    }
    async get(id, query) {
        const repository = database_1.default.getRepository(product_entity_1.Product);
        const product = await repository.findOneBy({ idProduct: id });
        if (!product) {
            throw new http_errors_1.NotFound("Product does not exist");
        }
        return product;
    }
    async update(id, data, query) {
        const repository = database_1.default.getRepository(product_entity_1.Product);
        await repository.update(id, data);
        return this.get(id, query);
    }
    async remove(id, query) {
        const repository = database_1.default.getRepository(product_entity_1.Product);
        const product = await this.get(id, query);
        await repository.delete(id);
        return product;
    }
}
exports.ProductAdapterRepository = ProductAdapterRepository;
