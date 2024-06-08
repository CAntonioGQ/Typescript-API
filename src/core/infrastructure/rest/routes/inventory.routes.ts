import { Router } from "express";
import { InventoryController } from "../controller/inventory.controller";
import { InventoryAdapterRepository } from "../../adapters/inventory.repository.adapter";

const inventoryRouter = Router();

const controller = new InventoryController(new InventoryAdapterRepository());

inventoryRouter.post("/inventario", controller.create.bind(controller));
inventoryRouter.get("/inventario", controller.list.bind(controller));
inventoryRouter.get("/inventario/:inventarioId", controller.get.bind(controller));
inventoryRouter.put("/inventario/:inventarioId", controller.update.bind(controller));
inventoryRouter.delete("/inventario/:inventarioId", controller.remove.bind(controller));

export default inventoryRouter;
