"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAdapterRepository = void 0;
const http_errors_1 = require("http-errors");
const database_1 = __importDefault(require("../config/database"));
const client_entity_1 = require("../entity/client.entity");
class ClientAdapterRepository {
    async create(data, query) {
        const repository = database_1.default.getRepository(client_entity_1.Client);
        const client = repository.create(data);
        await repository.save(client);
        return client;
    }
    async list(query) {
        const repository = database_1.default.getRepository(client_entity_1.Client);
        return repository.find();
    }
    async get(id, query) {
        const repository = database_1.default.getRepository(client_entity_1.Client);
        const client = await repository.findOneBy({ idClient: id });
        if (!client) {
            throw new http_errors_1.NotFound("Client does not exist");
        }
        return client;
    }
    async update(id, data, query) {
        const repository = database_1.default.getRepository(client_entity_1.Client);
        await repository.update(id, data);
        return this.get(id, query);
    }
    async remove(id, query) {
        const repository = database_1.default.getRepository(client_entity_1.Client);
        const client = await this.get(id, query);
        await repository.delete(id);
        return client;
    }
}
exports.ClientAdapterRepository = ClientAdapterRepository;
