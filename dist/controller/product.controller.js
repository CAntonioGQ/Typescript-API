"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
class ProductController {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(req, res, next) {
        try {
            const body = req.body;
            const product = await this.productRepository.create(body);
            res.status(200).json(product);
        }
        catch (error) {
            next(error);
        }
    }
    async list(req, res, next) {
        try {
            const products = await this.productRepository.list();
            res.status(200).json(products);
        }
        catch (error) {
            next(error);
        }
    }
    async get(req, res, next) {
        try {
            const { productId } = req.params;
            const product = await this.productRepository.get(productId);
            res.status(200).json(product);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const { productId } = req.params;
            const body = req.body;
            const product = await this.productRepository.update(productId, body);
            res.status(200).json(product);
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            const { productId } = req.params;
            const product = await this.productRepository.remove(productId);
            res.status(200).json(product);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ProductController = ProductController;
