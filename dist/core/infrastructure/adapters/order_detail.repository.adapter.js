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
exports.OrderDetailAdapterRepository = void 0;
const http_errors_1 = require("http-errors");
const database_1 = __importDefault(require("../../../config/database/database"));
const order_detail_1 = require("../entity/order_detail");
const order_detail_2 = require("../../domain/models/order_detail");
class OrderDetailAdapterRepository {
    create(data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(order_detail_1.OrderDetail);
            const orderDetail = repository.create(Object.assign(Object.assign({}, data), { status: order_detail_2.OrderDetailModel.ENABLE }));
            yield repository.save(orderDetail);
            return orderDetail;
        });
    }
    list(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(order_detail_1.OrderDetail);
            return repository.find();
        });
    }
    get(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(order_detail_1.OrderDetail);
            const orderDetail = yield repository.findOneBy({ idOrderDetail: id });
            if (!orderDetail) {
                throw new http_errors_1.NotFound("No existe una orden con el id proporcionado");
            }
            return orderDetail;
        });
    }
    update(id, data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(order_detail_1.OrderDetail);
            yield repository.update(id, data);
            return this.get(id, query);
        });
    }
    remove(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(order_detail_1.OrderDetail);
            const orderDetail = yield this.get(id, query);
            if (!orderDetail) {
                throw (0, http_errors_1.NotFound)("orderDetail doesn't exist");
            }
            orderDetail.status = order_detail_2.OrderDetailModel.DELETE;
            yield repository.save(orderDetail);
            return orderDetail;
        });
    }
}
exports.OrderDetailAdapterRepository = OrderDetailAdapterRepository;
