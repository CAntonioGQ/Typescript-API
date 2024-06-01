import { Router } from "express";
import { ProductController } from "../controller/product.controller";
import { ProductAdapterRepository } from "../adapters/product.repository.adapter";

const router = Router();

const controller = new ProductController(new ProductAdapterRepository());

router.post("/productos", controller.create.bind(controller));
router.get("/productos", controller.list.bind(controller));
router.get("/productos/:productId", controller.get.bind(controller));
router.put("/productos/:productId", controller.update.bind(controller));
router.delete("/productos/:productId", controller.remove.bind(controller));

export default router;
