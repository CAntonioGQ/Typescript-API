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
exports.SectorAdapterRepository = void 0;
const http_errors_1 = require("http-errors");
const database_1 = __importDefault(require("../../../config/database/database"));
const sector_1 = require("../../domain/models/sector");
const sector_entity_1 = require("../entity/sector.entity");
class SectorAdapterRepository {
    create(data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(sector_entity_1.Sector);
            const sector = repository.create(Object.assign(Object.assign({}, data), { status: sector_1.SectorModel.ENABLE }));
            yield repository.save(sector);
            return sector;
        });
    }
    list(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(sector_entity_1.Sector);
            return repository.find();
        });
    }
    get(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(sector_entity_1.Sector);
            const sector = yield repository.findOneBy({ idSector: id });
            if (!sector) {
                throw new http_errors_1.NotFound("No exister un sector con el id proporcionado");
            }
            return sector;
        });
    }
    update(id, data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(sector_entity_1.Sector);
            yield repository.update(id, data);
            return this.get(id, data);
        });
    }
    remove(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.default.getRepository(sector_entity_1.Sector);
            const sector = yield this.get(id, query);
            if (!sector) {
                throw new http_errors_1.NotFound("Sector doesn't exist");
            }
            sector.status = sector_1.SectorModel.DELETE;
            yield repository.save(sector);
            return sector;
        });
    }
}
exports.SectorAdapterRepository = SectorAdapterRepository;
