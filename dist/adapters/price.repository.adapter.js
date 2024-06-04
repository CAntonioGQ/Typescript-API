"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceAdapterRepository = void 0;
const http_errors_1 = require("http-errors");
const database_1 = __importDefault(require("../config/database/database"));
const price_entity_1 = require("../entity/price.entity");
class PriceAdapterRepository {
    create(data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(price_entity_1.Price);
            const price = repository.create(data);
            yield repository.save(price);
            return price;
        });
    }
    list(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(price_entity_1.Price);
            return repository.find();
        });
    }
    get(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(price_entity_1.Price);
            const price = yield repository.findOneBy({ idPrice: id });
            if (!price) {
                throw new http_errors_1.NotFound("No existe un precio con el id proporcionado");
            }
            return price;
        });
    }
    update(id, data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(price_entity_1.Price);
            yield repository.update(id, data);
            return this.get(id, query);
        });
    }
    remove(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(price_entity_1.Price);
            const price = yield this.get(id, query);
            // const ProductRepository = new ProductAdapterRepository();
            // const products = await ProductRepository.list();
            // const relatedProducts = products.filter(product => product.price === price.idPrice);
            // console.log(relatedProducts);
            // if (relatedProducts.length) {
            //   throw new Error('No se puede eliminar el precio porque está asociado a un producto');
            // }
            yield repository.delete(id);
            return price;
        });
    }
}
exports.PriceAdapterRepository = PriceAdapterRepository;
