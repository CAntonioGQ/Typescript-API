import { Router } from "express";
import { OrderDetailController } from "../controller/order_detail.controller";
import { OrderDetailAdapterRepository } from "../../adapters/order_detail.repository.adapter";

const orderDetailRouter = Router();

const controller = new OrderDetailController(new OrderDetailAdapterRepository());

orderDetailRouter.post("/detalleDeOrden", controller.create.bind(controller));
orderDetailRouter.get("/detalleDeOrden", controller.list.bind(controller));
orderDetailRouter.get("/detalleDeOrden/:detalleDeOrdenId", controller.get.bind(controller));
orderDetailRouter.put("/detalleDeOrden/:detalleDeOrdenId", controller.update.bind(controller));
orderDetailRouter.delete("/detalleDeOrden/:detalleDeOrdenId", controller.remove.bind(controller));

export default orderDetailRouter;
