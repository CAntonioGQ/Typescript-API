import { Request, Response, NextFunction } from "express";

import { ProductRepository } from "../repository/product.repository";
import { Product } from "../entity/product.entity";

export class productController {
    constructor(private productRepository: ProductRepository<Product>) { }

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body;

            const product = await this.productRepository.create(body);

            res.status(200).json(product)
        } catch (error) {
            next(error)
        }
    }

    async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const products = await this.productRepository.list();
            res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { productId } = req.params;

            const product = await this.productRepository.get(productId)

            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { productId } = req.params;
            const body = req.body;

            const product = await this.productRepository.update(productId, body);

            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { productId } = req.params;

            const product = await this.productRepository.remove(productId);

            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

}