import { NotFound } from "http-errors";
import database from "../config/database";
import { EmployeeRepository, Id, Query } from "../repository/employee.repository";
import { Employee } from "../entity/employee.entity";

export class EmployeeAdapterRepository implements EmployeeRepository<Employee> {
    async create(data: Partial<Employee>, query?: Query): Promise<Employee> {
        const repository = database.getRepository(Employee);
        const employee = repository.create(data);
        await repository.save(employee);
        return employee;
    }

    async list(query?: Query): Promise<Employee[]> {
        const repository = database.getRepository(Employee);
        return repository.find();
    }

    async get(id: Id, query?: Query): Promise<Employee> {
        const repository = database.getRepository(Employee);
        const employee = await repository.findOneBy({ idEmployee: id as number });
        if (!employee) {
            throw new NotFound("Employee does not exist");
        }
        return employee;
    }

    async update(id: Id, data: Employee, query?: Query): Promise<Employee> {
        const repository = database.getRepository(Employee);
        await repository.update(id, data);
        return this.get(id, query);
    }

    async remove(id: Id, query?: Query): Promise<Employee> {
        const repository = database.getRepository(Employee);
        const employee = await this.get(id, query);
        await repository.delete(id);
        return employee;
    }
}
