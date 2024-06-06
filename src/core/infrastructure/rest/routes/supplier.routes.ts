import { Router } from "express";
import { SupplierAdapterRepository } from "../../adapters/supplier.repository.adapter";
import { SupplierController } from "../controller/supplier.controller";

const supplierRouter = Router();

const controller = new SupplierController(new SupplierAdapterRepository());

supplierRouter.post("/proveedores", controller.create.bind(controller));
supplierRouter.get("/proveedores", controller.list.bind(controller));
supplierRouter.get("/proveedores/:proveedoresId", controller.get.bind(controller));
supplierRouter.put("/proveedores/:proveedoresId", controller.update.bind(controller));
supplierRouter.delete("/proveedores/:proveedoresId", controller.remove.bind(controller));

export default supplierRouter;
