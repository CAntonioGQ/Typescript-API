import { Router } from "express";
import { EmployeeController } from "../controller/employee.controller";
import { EmployeeAdapterRepository } from "../adapters/employee.repository.adapter";

const router = Router();

const controller = new EmployeeController(new EmployeeAdapterRepository());

router.post("/empleados", controller.create.bind(controller));
router.get("/empleados", controller.list.bind(controller));
router.get("/empleados/:empleadoId", controller.get.bind(controller));
router.put("/empleados/:empleadoId", controller.update.bind(controller));
router.delete("/empleados/:empleadoId", controller.remove.bind(controller));

export default router;
