"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryProductModel = void 0;
class InventoryProductModel {
    get getIdInventoryProduct() {
        return this.idInventoryProduct;
    }
    set setIdInvetoryProduct(idInventoryProduct) {
        this.idInventoryProduct = idInventoryProduct;
    }
    get getInventoryProduct() {
        return this.inventoryProduct;
    }
    set setInventoryProduct(inventoryProduct) {
        this.inventoryProduct = inventoryProduct;
    }
}
exports.InventoryProductModel = InventoryProductModel;
InventoryProductModel.ENABLE = 1;
InventoryProductModel.DISABLE = 2;
InventoryProductModel.LOCK = 3;
InventoryProductModel.PENDING = 4;
InventoryProductModel.DELETE = 99;
