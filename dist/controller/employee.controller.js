"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
class EmployeeController {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async create(req, res, next) {
        try {
            const body = req.body;
            const employee = await this.employeeRepository.create(body);
            res.status(200).json(employee);
        }
        catch (error) {
            next(error);
        }
    }
    async list(req, res, next) {
        try {
            const employees = await this.employeeRepository.list();
            res.status(200).json(employees);
        }
        catch (error) {
            next(error);
        }
    }
    async get(req, res, next) {
        try {
            const { empleadoId } = req.params;
            const employee = await this.employeeRepository.get(empleadoId);
            res.status(200).json(employee);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const { empleadoId } = req.params;
            const body = req.body;
            const employee = await this.employeeRepository.update(empleadoId, body);
            res.status(200).json(employee);
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            const { empleadoId } = req.params;
            const employee = await this.employeeRepository.remove(empleadoId);
            res.status(200).json(employee);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.EmployeeController = EmployeeController;
