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
exports.Supplier = void 0;
const typeorm_1 = require("typeorm");
let Supplier = class Supplier {
};
exports.Supplier = Supplier;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'supplier_id', type: "integer" }),
    __metadata("design:type", Number)
], Supplier.prototype, "idSupplier", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'supplier_name', type: "varchar" }),
    __metadata("design:type", String)
], Supplier.prototype, "supplierName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contact_name', type: "varchar" }),
    __metadata("design:type", String)
], Supplier.prototype, "contactName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contact_email', type: "varchar" }),
    __metadata("design:type", String)
], Supplier.prototype, "contactEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contact_phone', type: "varchar" }),
    __metadata("design:type", String)
], Supplier.prototype, "contactPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contact_address', type: "varchar" }),
    __metadata("design:type", String)
], Supplier.prototype, "contactAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: "integer" }),
    __metadata("design:type", Number)
], Supplier.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Supplier.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Supplier.prototype, "updatedAt", void 0);
exports.Supplier = Supplier = __decorate([
    (0, typeorm_1.Entity)({ name: 'supplier' })
], Supplier);
