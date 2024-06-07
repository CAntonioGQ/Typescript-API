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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryController = void 0;
class InventoryController {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const inventory = yield this.inventoryRepository.create(body);
                res.status(200).json(inventory);
            }
            catch (error) {
                next(error);
            }
        });
    }
    list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inventories = yield this.inventoryRepository.list();
                res.status(200).json(inventories);
            }
            catch (error) {
                next(error);
            }
        });
    }
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { inventarioId } = req.params;
                const inventory = yield this.inventoryRepository.get(inventarioId);
                res.status(200).json(inventory);
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { inventarioId } = req.params;
                const body = req.body;
                const inventory = yield this.inventoryRepository.update(inventarioId, body);
                res.status(200).json(inventory);
            }
            catch (error) {
                next(error);
            }
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { inventarioId } = req.params;
                const inventory = yield this.inventoryRepository.remove(inventarioId);
                res.status(200).json(inventory);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.InventoryController = InventoryController;
