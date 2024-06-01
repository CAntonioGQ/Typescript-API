"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrestamoRepository = void 0;
const http_errors_1 = require("http-errors");
const database_1 = __importDefault(require("../config/database"));
const client_1 = require("../entity/client");
class PrestamoRepository {
    async create(data, query) {
        const repository = database_1.default.getRepository(client_1.Client);
        const prestamo = repository.create(data);
        await repository.save(prestamo);
        return prestamo;
    }
    async list(query) {
        const repository = database_1.default.getRepository(client_1.Client);
        return repository.find();
    }
    async get(id, query) {
        const repository = database_1.default.getRepository(client_1.Client);
        const task = await repository.findOneBy({ idClient: id });
        if (!task) {
            throw new http_errors_1.NotFound("Task does not exist");
        }
        return task;
    }
    async update(id, data, query) {
        const repository = database_1.default.getRepository(client_1.Client);
        await repository.update(id, data);
        return this.get(id, query);
    }
    async remove(id, query) {
        const repository = database_1.default.getRepository(client_1.Client);
        const task = await this.get(id, query);
        await repository.delete(id);
        return task;
    }
}
exports.PrestamoRepository = PrestamoRepository;
