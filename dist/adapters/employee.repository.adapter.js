"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeAdapterRepository = void 0;
const http_errors_1 = require("http-errors");
const database_1 = __importDefault(require("../config/database"));
const employee_entity_1 = require("../entity/employee.entity");
class EmployeeAdapterRepository {
    async create(data, query) {
        const repository = database_1.default.getRepository(employee_entity_1.Employee);
        const employee = repository.create(data);
        await repository.save(employee);
        return employee;
    }
    async list(query) {
        const repository = database_1.default.getRepository(employee_entity_1.Employee);
        return repository.find();
    }
    async get(id, query) {
        const repository = database_1.default.getRepository(employee_entity_1.Employee);
        const employee = await repository.findOneBy({ idEmployee: id });
        if (!employee) {
            throw new http_errors_1.NotFound("Employee does not exist");
        }
        return employee;
    }
    async update(id, data, query) {
        const repository = database_1.default.getRepository(employee_entity_1.Employee);
        await repository.update(id, data);
        return this.get(id, query);
    }
    async remove(id, query) {
        const repository = database_1.default.getRepository(employee_entity_1.Employee);
        const employee = await this.get(id, query);
        await repository.delete(id);
        return employee;
    }
}
exports.EmployeeAdapterRepository = EmployeeAdapterRepository;
