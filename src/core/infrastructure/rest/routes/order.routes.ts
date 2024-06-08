import { Router } from "express";
import { OrderController } from "../controller/order.controller";
import { OrderAdapterRepository } from "../../adapters/order.repository.adapter";

const orderRouter = Router();

const controller = new OrderController(new OrderAdapterRepository());

orderRouter.post("/orden", controller.create.bind(controller));
orderRouter.get("/orden", controller.list.bind(controller));
orderRouter.get("/orden/:ordenId", controller.get.bind(controller));
orderRouter.put("/orden/:ordenId", controller.update.bind(controller));
orderRouter.delete("/orden/:ordenId", controller.remove.bind(controller));

export default orderRouter;
