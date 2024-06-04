"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAdapterRepository = void 0;
const http_errors_1 = require("http-errors");
const database_1 = __importDefault(require("../config/database/database"));
const client_entity_1 = require("../entity/client.entity");
class ClientAdapterRepository {
    create(data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(client_entity_1.Client);
            const client = repository.create(data);
            yield repository.save(client);
            return client;
        });
    }
    list(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(client_entity_1.Client);
            return repository.find();
        });
    }
    get(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(client_entity_1.Client);
            const client = yield repository.findOneBy({ idClient: id });
            if (!client) {
                throw new http_errors_1.NotFound("No existe un cliente con el id proporcionado");
            }
            return client;
        });
    }
    update(id, data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(client_entity_1.Client);
            yield repository.update(id, data);
            return this.get(id, query);
        });
    }
    remove(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(client_entity_1.Client);
            const client = yield this.get(id, query);
            yield repository.delete(id);
            return client;
        });
    }
}
exports.ClientAdapterRepository = ClientAdapterRepository;
