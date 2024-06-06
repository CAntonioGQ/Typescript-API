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
exports.SupplierController = void 0;
class SupplierController {
    constructor(supplierRepository) {
        this.supplierRepository = supplierRepository;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const supplier = yield this.supplierRepository.create(body);
                res.status(200).json(supplier);
            }
            catch (error) {
                next(error);
            }
        });
    }
    list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const suppliers = yield this.supplierRepository.list();
                res.status(200).json(suppliers);
            }
            catch (error) {
                next(error);
            }
        });
    }
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { proveedoresId } = req.params;
                const supplier = yield this.supplierRepository.get(proveedoresId);
                res.status(200).json(supplier);
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { proveedoresId } = req.params;
                const body = req.body;
                const supplier = yield this.supplierRepository.update(proveedoresId, body);
                res.status(200).json(supplier);
            }
            catch (error) {
                next(error);
            }
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { proveedoresId } = req.params;
                const supplier = yield this.supplierRepository.remove(proveedoresId);
                res.status(200).json(supplier);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.SupplierController = SupplierController;
