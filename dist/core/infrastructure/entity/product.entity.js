"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const price_entity_1 = require("./price.entity");
const inventory_entity_1 = require("./inventory.entity");
let Product = class Product {
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_product', type: "integer" }),
    __metadata("design:type", Number)
], Product.prototype, "idProduct", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'product', type: "varchar" }),
    __metadata("design:type", String)
], Product.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', type: "varchar" }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => price_entity_1.Price),
    (0, typeorm_1.JoinColumn)({ name: 'id_price' }),
    __metadata("design:type", price_entity_1.Price)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => inventory_entity_1.Inventory),
    (0, typeorm_1.JoinColumn)({ name: 'id_inventory' }),
    __metadata("design:type", inventory_entity_1.Inventory)
], Product.prototype, "inventory", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'integer' }),
    __metadata("design:type", Number)
], Product.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)({ name: 'products' })
], Product);
