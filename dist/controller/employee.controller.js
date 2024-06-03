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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
class EmployeeController {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const employee = yield this.employeeRepository.create(body);
                res.status(200).json(employee);
            }
            catch (error) {
                next(error);
            }
        });
    }
    list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employees = yield this.employeeRepository.list();
                res.status(200).json(employees);
            }
            catch (error) {
                next(error);
            }
        });
    }
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { empleadoId } = req.params;
                const employee = yield this.employeeRepository.get(empleadoId);
                res.status(200).json(employee);
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { empleadoId } = req.params;
                const body = req.body;
                const employee = yield this.employeeRepository.update(empleadoId, body);
                res.status(200).json(employee);
            }
            catch (error) {
                next(error);
            }
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { empleadoId } = req.params;
                const employee = yield this.employeeRepository.remove(empleadoId);
                res.status(200).json(employee);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.EmployeeController = EmployeeController;
