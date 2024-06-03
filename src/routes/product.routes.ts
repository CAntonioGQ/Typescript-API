import { Router } from "express";
import { ProductController } from "../controller/product.controller";
import { ProductAdapterRepository } from "../adapters/product.repository.adapter";

const productRouter = Router();

const controller = new ProductController(new ProductAdapterRepository());

productRouter.post("/productos", controller.create.bind(controller));
productRouter.get("/productos", controller.list.bind(controller));
productRouter.get("/productos/:productId", controller.get.bind(controller));
productRouter.put("/productos/:productId", controller.update.bind(controller));
productRouter.delete("/productos/:productId", controller.remove.bind(controller));

export default productRouter;
