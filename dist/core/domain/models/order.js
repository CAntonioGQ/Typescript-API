"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
class OrderModel {
    get getIdOrder() {
        return this.idOrder;
    }
    set setIdOrder(idOrder) {
        this.idOrder = idOrder;
    }
    get getIdClient() {
        return this.idClient;
    }
    set setIdClient(idClient) {
        this.idClient = idClient;
    }
    get getOrderDate() {
        return this.orderDate;
    }
    set setOrderDate(orderDate) {
        this.orderDate = orderDate;
    }
    get getTotalPrice() {
        return this.totalPrice;
    }
    set setTotalPrice(totalPrice) {
        this.totalPrice = totalPrice;
    }
    get getStatus() {
        return this.status;
    }
    set setStatus(status) {
        this.status = status;
    }
}
exports.OrderModel = OrderModel;
OrderModel.ENABLE = 1;
OrderModel.DISABLE = 2;
OrderModel.LOCK = 3;
OrderModel.PENDING = 4;
OrderModel.DELETE = 99;
