import { Router } from "express";
import { ClientController } from "../controller/client.controller";
import { ClientAdapterRepository } from "../adapters/client.repository.adapter";

const clientRouter = Router();

const controller = new ClientController(new ClientAdapterRepository());

clientRouter.post("/clientes", controller.create.bind(controller));
clientRouter.get("/clientes", controller.list.bind(controller));
clientRouter.get("/clientes/:clienteId", controller.get.bind(controller));
clientRouter.put("/clientes/:clienteId", controller.update.bind(controller));
clientRouter.delete("/clientes/:clienteId", controller.remove.bind(controller));

export default clientRouter;
