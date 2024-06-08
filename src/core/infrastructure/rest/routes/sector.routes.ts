import { Router } from "express";
import { SectorController } from "../controller/sector.controller";
import { SectorAdapterRepository } from "../../adapters/sector.repository.adapter";

const sectorRouter = Router();

const controller = new SectorController(new SectorAdapterRepository());

sectorRouter.post("/sector", controller.create.bind(controller));
sectorRouter.get("/sector", controller.list.bind(controller));
sectorRouter.get("/sector/:sectorId", controller.get.bind(controller));
sectorRouter.put("/sector/:sectorId", controller.update.bind(controller));
sectorRouter.delete("/sector/:sectorId", controller.remove.bind(controller));

export default sectorRouter;
