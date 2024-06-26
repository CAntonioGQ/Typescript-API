"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const price_controller_1 = require("../controller/price.controller");
const price_repository_adapter_1 = require("../adapters/price.repository.adapter");
const priceRouter = (0, express_1.Router)();
const controller = new price_controller_1.PriceController(new price_repository_adapter_1.PriceAdapterRepository());
priceRouter.post("/precios", controller.create.bind(controller));
priceRouter.get("/precios", controller.list.bind(controller));
priceRouter.get("/precios/:precioId", controller.get.bind(controller));
priceRouter.put("/precios/:precioId", controller.update.bind(controller));
priceRouter.delete("/precios/:precioId", controller.remove.bind(controller));
exports.default = priceRouter;
