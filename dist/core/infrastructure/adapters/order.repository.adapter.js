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
exports.OrderAdapterRepository = void 0;
const database_1 = __importDefault(require("../../../config/database/database"));
const order_1 = require("../../domain/models/order");
const order_entity_1 = require("../entity/order.entity");
const http_errors_1 = require("http-errors");
class OrderAdapterRepository {
    create(data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(order_entity_1.Order);
            const order = repository.create(Object.assign(Object.assign({}, data), { status: order_1.OrderModel.ENABLE }));
            yield repository.save(order);
            return order;
        });
    }
    list(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(order_entity_1.Order);
            return repository.find();
        });
    }
    get(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(order_entity_1.Order);
            const order = yield repository.findOneBy({ idOrder: id });
            if (!order) {
                throw new http_errors_1.NotFound("No existe una orden con el id proporcionado");
            }
            return order;
        });
    }
    update(id, data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(order_entity_1.Order);
            yield repository.update(id, data);
            return this.get(id, data);
        });
    }
    remove(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(order_entity_1.Order);
            const order = yield this.get(id, query);
            if (!order) {
                throw new http_errors_1.NotFound("order doesn't exist");
            }
            order.status = order_1.OrderModel.DELETE;
            yield repository.save(order);
            return order;
        });
    }
}
exports.OrderAdapterRepository = OrderAdapterRepository;
