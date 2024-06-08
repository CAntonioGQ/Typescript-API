import { Router } from "express";
import { BranchController } from "../controller/branch.controller";
import { BranchAdapterRepository } from "../../adapters/branch.repository.adapter";

const branchRouter = Router();

const controller = new BranchController(new BranchAdapterRepository());

branchRouter.post("/sucursal", controller.create.bind(controller));
branchRouter.get("/sucursal", controller.list.bind(controller));
branchRouter.get("/sucursal/:sucursalId", controller.get.bind(controller));
branchRouter.put("/sucursal/:sucursalId", controller.update.bind(controller));
branchRouter.delete("/sucursal/:sucursalId", controller.remove.bind(controller));

export default branchRouter;
