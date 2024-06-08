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
exports.OrderDetailController = void 0;
class OrderDetailController {
    constructor(orderDetailRepository) {
        this.orderDetailRepository = orderDetailRepository;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const orderDetail = yield this.orderDetailRepository.create(body);
                res.status(200).json(orderDetail);
            }
            catch (error) {
                next(error);
            }
        });
    }
    list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ordersDetail = yield this.orderDetailRepository.list();
                res.status(200).json(ordersDetail);
            }
            catch (error) {
                next(error);
            }
        });
    }
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { detalleDeOrdenId } = req.params;
                const orderDetail = yield this.orderDetailRepository.get(detalleDeOrdenId);
                res.status(200).json(orderDetail);
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { detalleDeOrdenId } = req.params;
                const body = req.body;
                const orderDetail = yield this.orderDetailRepository.update(detalleDeOrdenId, body);
                res.status(200).json(orderDetail);
            }
            catch (error) {
                next(error);
            }
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { detalleDeOrdenId } = req.params;
                const orderDetail = yield this.orderDetailRepository.remove(detalleDeOrdenId);
                res.status(200).json(orderDetail);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.OrderDetailController = OrderDetailController;
