"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailModel = void 0;
class OrderDetailModel {
    get getIdOrderDetail() {
        return this.idOrderDetail;
    }
    set setIdOrderDetail(idOrderDetail) {
        this.idOrderDetail = idOrderDetail;
    }
    get getIdOrder() {
        return this.idOrder;
    }
    set setIdOrder(idOrder) {
        this.idOrder = idOrder;
    }
    get getIdProduct() {
        return this.idProduct;
    }
    set setIdProduct(idProduct) {
        this.idProduct = idProduct;
    }
    get getQuantity() {
        return this.quantity;
    }
    set setQuantity(quantity) {
        this.quantity = quantity;
    }
    get getPrice() {
        return this.price;
    }
    set setPrice(price) {
        this.price = price;
    }
    get getStatus() {
        return this.status;
    }
    set setStatus(status) {
        this.status = status;
    }
}
exports.OrderDetailModel = OrderDetailModel;
OrderDetailModel.ENABLE = 1;
OrderDetailModel.DISABLE = 2;
OrderDetailModel.LOCK = 3;
OrderDetailModel.PENDING = 4;
OrderDetailModel.DELETE = 99;
