"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prestamoController = void 0;
class prestamoController {
    constructor(repository) {
        this.repository = repository;
    }
    async create(req, res, next) {
        try {
            const body = req.body;
            const prestamo = await this.repository.create(body);
            res.status(200).json(prestamo);
        }
        catch (error) {
            next(error);
        }
    }
    async list(req, res, next) {
        try {
            const prestamos = await this.repository.list();
            res.status(200).json(prestamos);
        }
        catch (error) {
            next(error);
        }
    }
    async get(req, res, next) {
        try {
            const { prestamoId } = req.params;
            const task = await this.repository.get(prestamoId);
            res.status(200).json(task);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const { prestamoId } = req.params;
            const body = req.body;
            const prestamo = await this.repository.update(prestamoId, body);
            res.status(200).json(prestamo);
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            const { prestamoId } = req.params;
            const task = await this.repository.remove(prestamoId);
            res.status(200).json(task);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.prestamoController = prestamoController;
