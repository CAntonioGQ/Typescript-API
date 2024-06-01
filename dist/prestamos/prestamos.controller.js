"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
class TaskController {
    constructor(repository) {
        this.repository = repository;
    }
    async create(req, res, next) {
        try {
            const body = req.body;
            const task = await this.repository.create(body);
            res.status(200).json(task);
        }
        catch (error) {
            next(error);
        }
    }
    async list(req, res, next) {
        try {
            const tasks = await this.repository.list();
            res.status(200).json(tasks);
        }
        catch (error) {
            next(error);
        }
    }
    async get(req, res, next) {
        try {
            const { taskId } = req.params;
            const task = await this.repository.get(taskId);
            res.status(200).json(task);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const { taskId } = req.params;
            const body = req.body;
            const task = await this.repository.update(taskId, body);
            res.status(200).json(task);
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            const { taskId } = req.params;
            const task = await this.repository.remove(taskId);
            res.status(200).json(task);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.TaskController = TaskController;
