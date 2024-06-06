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
exports.PriceController = void 0;
class PriceController {
    constructor(priceRepository) {
        this.priceRepository = priceRepository;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const price = yield this.priceRepository.create(body);
                res.status(200).json(price);
            }
            catch (error) {
                next(error);
            }
        });
    }
    list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const prices = yield this.priceRepository.list();
                res.status(200).json(prices);
            }
            catch (error) {
                next(error);
            }
        });
    }
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { precioId } = req.params;
                const price = yield this.priceRepository.get(precioId);
                res.status(200).json(price);
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { precioId } = req.params;
                const body = req.body;
                const price = yield this.priceRepository.update(precioId, body);
                res.status(200).json(price);
            }
            catch (error) {
                next(error);
            }
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { precioId } = req.params;
                const price = yield this.priceRepository.remove(precioId);
                res.status(200).json(price);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.PriceController = PriceController;
