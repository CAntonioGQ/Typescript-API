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
exports.InventoryAdapterRepository = void 0;
const http_errors_1 = require("http-errors");
const database_1 = __importDefault(require("../../../config/database/database"));
const inventory_entity_1 = require("../entity/inventory.entity");
const inventory_1 = require("../../domain/models/inventory");
class InventoryAdapterRepository {
    create(data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(inventory_entity_1.Inventory);
            const inventory = repository.create(Object.assign(Object.assign({}, data), { status: inventory_1.InventoryModel.ENABLE }));
            yield repository.save(inventory);
            return inventory;
        });
    }
    list(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(inventory_entity_1.Inventory);
            return repository.find();
        });
    }
    get(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(inventory_entity_1.Inventory);
            const inventory = yield repository.findOneBy({ idInventory: id });
            if (!inventory) {
                throw new http_errors_1.NotFound("No existe inventario con el id proporcionado");
            }
            return inventory;
        });
    }
    update(id, data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(inventory_entity_1.Inventory);
            yield repository.update(id, data);
            return this.get(id, query);
        });
    }
    remove(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(inventory_entity_1.Inventory);
            const inventory = yield this.get(id, query);
            if (!inventory) {
                throw new http_errors_1.NotFound("Inventory does not exist");
            }
            inventory.status = inventory_1.InventoryModel.DELETE;
            yield repository.save(inventory);
            return inventory;
        });
    }
}
exports.InventoryAdapterRepository = InventoryAdapterRepository;
