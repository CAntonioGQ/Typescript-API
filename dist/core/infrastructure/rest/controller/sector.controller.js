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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorController = void 0;
class SectorController {
    constructor(sectorRepository) {
        this.sectorRepository = sectorRepository;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const sector = yield this.sectorRepository.create(body);
                res.status(200).json(sector);
            }
            catch (error) {
                next(error);
            }
        });
    }
    list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sectors = yield this.sectorRepository.list();
                res.status(200).json(sectors);
            }
            catch (error) {
                next(error);
            }
        });
    }
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { sectoresId } = req.params;
                const sector = yield this.sectorRepository.get(sectoresId);
                res.status(200).json(sector);
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { sectoresId } = req.params;
                const body = req.body;
                const sector = yield this.sectorRepository.update(sectoresId, body);
                res.status(200).json(sector);
            }
            catch (error) {
                next(error);
            }
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { sectoresId } = req.params;
                const sector = yield this.sectorRepository.remove(sectoresId);
                res.status(200).json(sector);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.SectorController = SectorController;
