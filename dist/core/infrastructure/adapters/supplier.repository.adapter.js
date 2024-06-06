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
exports.SupplierAdapterRepository = void 0;
const http_errors_1 = require("http-errors");
const database_1 = __importDefault(require("../../../config/database/database"));
const supplier_entity_1 = require("../entity/supplier.entity");
const supplier_1 = require("../../domain/models/supplier");
class SupplierAdapterRepository {
    create(data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(supplier_entity_1.Supplier);
            const supplier = repository.create(Object.assign(Object.assign({}, data), { status: supplier_1.SupplierModel.ENABLE }));
            yield repository.save(supplier);
            return supplier;
        });
    }
    list(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(supplier_entity_1.Supplier);
            return repository.find();
        });
    }
    get(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(supplier_entity_1.Supplier);
            const supplier = yield repository.findOneBy({ idSupplier: 6 });
            if (!supplier) {
                throw new http_errors_1.NotFound("Supplier does not exist");
            }
            return supplier;
        });
    }
    update(id, data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(supplier_entity_1.Supplier);
            yield repository.update(id, data);
            return this.get(id, query);
        });
    }
    remove(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(supplier_entity_1.Supplier);
            const supplier = yield this.get(id, query);
            if (!supplier) {
                throw new http_errors_1.NotFound("Supplier Not Found");
            }
            supplier.status = supplier_1.SupplierModel.DELETE;
            yield repository.save(supplier);
            return supplier;
        });
    }
}
exports.SupplierAdapterRepository = SupplierAdapterRepository;
