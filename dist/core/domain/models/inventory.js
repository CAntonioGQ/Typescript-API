"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryModel = void 0;
class InventoryModel {
    get getIdInventory() {
        return this.idInventory;
    }
    set setIdInventory(idInventory) {
        this.idInventory = idInventory;
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
    get getStatus() {
        return this.status;
    }
    set setStatus(status) {
        this.status = status;
    }
}
exports.InventoryModel = InventoryModel;
InventoryModel.ENABLE = 1;
InventoryModel.DISABLE = 2;
InventoryModel.LOCK = 3;
InventoryModel.PENDING = 4;
InventoryModel.DELETE = 99;
