"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceModel = void 0;
class PriceModel {
    get getIdPrice() {
        return this.idPrice;
    }
    set setIdPrice(idPrice) {
        this.idPrice = idPrice;
    }
    get getPrice() {
        return this.price;
    }
    set setPrice(price) {
        this.price = price;
    }
}
exports.PriceModel = PriceModel;
PriceModel.ENABLE = 1;
PriceModel.DISABLE = 2;
PriceModel.LOCK = 3;
PriceModel.PENDING = 4;
PriceModel.DELETE = 99;
