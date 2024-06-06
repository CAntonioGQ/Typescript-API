import { Router } from "express";
import { EmployeeController } from "../controller/employee.controller";
import { EmployeeAdapterRepository } from "../../adapters/employee.repository.adapter";

const employeeRouter = Router();

const controller = new EmployeeController(new EmployeeAdapterRepository());

employeeRouter.post("/empleados", controller.create.bind(controller));
employeeRouter.get("/empleados", controller.list.bind(controller));
employeeRouter.get("/empleados/:empleadoId", controller.get.bind(controller));
employeeRouter.put("/empleados/:empleadoId", controller.update.bind(controller));
employeeRouter.delete("/empleados/:empleadoId", controller.remove.bind(controller));

export default employeeRouter;
