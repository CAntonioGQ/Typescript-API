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
exports.Sector = void 0;
const typeorm_1 = require("typeorm");
const branch_entity_1 = require("./branch.entity");
let Sector = class Sector {
};
exports.Sector = Sector;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_sector', type: 'integer' }),
    __metadata("design:type", Number)
], Sector.prototype, "idSector", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => branch_entity_1.Branch, branch => branch.sector),
    __metadata("design:type", Array)
], Sector.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sector', type: 'varchar' }),
    __metadata("design:type", String)
], Sector.prototype, "sector", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'number' }),
    __metadata("design:type", Number)
], Sector.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Sector.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Sector.prototype, "updatedAt", void 0);
exports.Sector = Sector = __decorate([
    (0, typeorm_1.Entity)({ name: 'sector' })
], Sector);
