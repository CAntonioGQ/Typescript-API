import { Router } from "express";
import { PriceController } from "../controller/price.controller";
import { PriceAdapterRepository } from "../adapters/price.repository.adapter";

const priceRouter = Router();

const controller = new PriceController(new PriceAdapterRepository());

priceRouter.post("/precios", controller.create.bind(controller));
priceRouter.get("/precios", controller.list.bind(controller));
priceRouter.get("/precios/:precioId", controller.get.bind(controller));
priceRouter.put("/precios/:precioId", controller.update.bind(controller));
priceRouter.delete("/precios/:precioId", controller.remove.bind(controller));

export default priceRouter;