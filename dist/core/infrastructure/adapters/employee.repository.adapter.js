"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeAdapterRepository = void 0;
const http_errors_1 = require("http-errors");
const database_1 = __importDefault(require("../../../config/database/database"));
const employee_entity_1 = require("../entity/employee.entity");
const employee_1 = require("../../domain/models/employee");
class EmployeeAdapterRepository {
    create(data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(employee_entity_1.Employee);
            const employee = repository.create(Object.assign(Object.assign({}, data), { status: employee_1.EmployeeModel.ENABLE }));
            yield repository.save(employee);
            return employee;
        });
    }
    list(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(employee_entity_1.Employee);
            return repository.find();
        });
    }
    get(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(employee_entity_1.Employee);
            const employee = yield repository.findOneBy({ idEmployee: id });
            if (!employee) {
                throw new http_errors_1.NotFound("No existe un empleado con el id proporcionado");
            }
            return employee;
        });
    }
    update(id, data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(employee_entity_1.Employee);
            yield repository.update(id, data);
            return this.get(id, query);
        });
    }
    remove(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(employee_entity_1.Employee);
            const employee = yield this.get(id, query);
            if (!employee) {
                throw new http_errors_1.NotFound("Employee does not exist");
            }
            employee.status = employee_1.EmployeeModel.DELETE;
            yield repository.save(employee);
            return employee;
        });
    }
}
exports.EmployeeAdapterRepository = EmployeeAdapterRepository;
