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
exports.OrderDetail = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./order.entity");
let OrderDetail = class OrderDetail {
};
exports.OrderDetail = OrderDetail;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_order_detail', type: 'integer' }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "idOrderDetail", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => order_entity_1.Order, order => order.orderDetail),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", order_entity_1.Order)
], OrderDetail.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quantity', type: 'integer' }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "orderQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'price', type: 'decimal' }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "orderPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'number' }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OrderDetail.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OrderDetail.prototype, "updatedAt", void 0);
exports.OrderDetail = OrderDetail = __decorate([
    (0, typeorm_1.Entity)({ name: 'order_details' })
], OrderDetail);
