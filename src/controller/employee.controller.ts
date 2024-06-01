import { Request, Response, NextFunction } from "express";

import { EmployeeRepository } from "../repository/employee.repository";
import { Employee } from "../entity/employee.entity";

export class employeeController{
    constructor (private employeeRepository: EmployeeRepository<Employee>) {}

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body;

            const employee = await this.employeeRepository.create(body);

            res.status(200).json(employee);
        } catch (error) {
            next(error);
        }
    }

    async list (req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const employees = await this.employeeRepository.list();
            res.status(200).json(employees);
        } catch (error) {
            next(error);
        }
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const { employeeId } = req.params;
            
            const employee = await this.employeeRepository.get(employeeId);

            res.status(200).json(employee)
        } catch (error) {
            next(error)
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const { employeeId } = req.params;
            const body = req.body;

            const employee = await this.employeeRepository.update(employeeId, body);

            res.status(200).json(employee)
        } catch (error) {
            next(error);
        }

    }
    async remove(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const { employeeId } = req.params;

            const employee = await this.employeeRepository.remove(employeeId);

            res.status(200).json(employee)
        } catch (error) {
            next(error);
        }
    }
}