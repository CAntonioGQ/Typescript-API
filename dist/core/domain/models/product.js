"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
class ProductModel {
    get getIdProduct() {
        return this.idProduct;
    }
    set setIdProduct(idProduct) {
        this.idProduct = idProduct;
    }
    get getProduct() {
        return this.product;
    }
    set setProduct(product) {
        this.product = product;
    }
    get getDescription() {
        return this.description;
    }
    set setDescription(description) {
        this.description = description;
    }
}
exports.ProductModel = ProductModel;
ProductModel.ENABLE = 1;
ProductModel.DISABLE = 2;
ProductModel.LOCK = 3;
ProductModel.PENDING = 4;
ProductModel.DELETE = 99;
