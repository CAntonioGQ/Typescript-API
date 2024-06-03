"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("../controller/client.controller");
const client_repository_adapter_1 = require("../adapters/client.repository.adapter");
const clientRouter = (0, express_1.Router)();
const controller = new client_controller_1.ClientController(new client_repository_adapter_1.ClientAdapterRepository());
clientRouter.post("/clientes", controller.create.bind(controller));
clientRouter.get("/clientes", controller.list.bind(controller));
clientRouter.get("/clientes/:clienteId", controller.get.bind(controller));
clientRouter.put("/clientes/:clienteId", controller.update.bind(controller));
clientRouter.delete("/clientes/:clienteId", controller.remove.bind(controller));
exports.default = clientRouter;
