"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const http_errors_1 = require("http-errors");
const database_1 = __importDefault(require("../config/database"));
const Prestamos_1 = require("../entity/Prestamos");
class TaskRepository {
    async create(data, query) {
        const repository = database_1.default.getRepository(Prestamos_1.Prestamos);
        const task = repository.create(data);
        await repository.save(task);
        return task;
    }
    async list(query) {
        const repository = database_1.default.getRepository(Prestamos_1.Prestamos);
        return repository.find();
    }
    async get(id, query) {
        const repository = database_1.default.getRepository(Prestamos_1.Prestamos);
        const task = await repository.findOneBy({ idPrestamos: id });
        if (!task) {
            throw new http_errors_1.NotFound("Task does not exist");
        }
        return task;
    }
    async update(id, data, query) {
        const repository = database_1.default.getRepository(Prestamos_1.Prestamos);
        await repository.update(id, data);
        return this.get(id, query);
    }
    async remove(id, query) {
        const repository = database_1.default.getRepository(Prestamos_1.Prestamos);
        const task = await this.get(id, query);
        await repository.delete(id);
        return task;
    }
}
exports.TaskRepository = TaskRepository;
