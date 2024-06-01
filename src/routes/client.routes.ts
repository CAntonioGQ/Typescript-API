
import { Router } from "express";

import { prestamoController } from "../controller/prestamos.controller";
import { ClientAdapterRepository } from "../adapters/clients.repository.adapter";

const router = Router();

const controller = new prestamoController(
  new ClientAdapterRepository()
);

router.post("/clientes", controller.create.bind(controller));

router.get("/clientes", controller.list.bind(controller));

router.get("/clientes/:clienteId", controller.get.bind(controller));

router.put("/clientes/:clienteId", controller.update.bind(controller));

router.delete("/clientes/:clienteId", controller.remove.bind(controller));

export default router;
