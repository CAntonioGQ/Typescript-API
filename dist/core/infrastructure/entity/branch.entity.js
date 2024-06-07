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
exports.Branch = void 0;
const typeorm_1 = require("typeorm");
const employee_entity_1 = require("./employee.entity");
const sector_entity_1 = require("./sector.entity");
let Branch = class Branch {
};
exports.Branch = Branch;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_branch', type: 'integer' }),
    __metadata("design:type", Number)
], Branch.prototype, "idBranch", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_entity_1.Employee, employee => employee.branch),
    __metadata("design:type", Array)
], Branch.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sector_entity_1.Sector),
    (0, typeorm_1.JoinColumn)({ name: 'id_sector' }),
    __metadata("design:type", sector_entity_1.Sector)
], Branch.prototype, "sector", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar' }),
    __metadata("design:type", Branch)
], Branch.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'number' }),
    __metadata("design:type", Number)
], Branch.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Branch.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Branch.prototype, "updatedAt", void 0);
exports.Branch = Branch = __decorate([
    (0, typeorm_1.Entity)({ name: 'branches' })
], Branch);
