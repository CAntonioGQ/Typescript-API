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
exports.BranchController = void 0;
class BranchController {
    constructor(branchRepository) {
        this.branchRepository = branchRepository;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const branch = yield this.branchRepository.create(body);
                res.status(200).json(branch);
            }
            catch (error) {
                next(error);
            }
        });
    }
    list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const branches = yield this.branchRepository.list();
                res.status(200).json(branches);
            }
            catch (error) {
                next(error);
            }
        });
    }
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { sucursalId } = req.params;
                const branch = yield this.branchRepository.get(sucursalId);
                res.status(200).json(branch);
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { sucursalId } = req.params;
                const body = req.body;
                const branch = yield this.branchRepository.update(sucursalId, body);
                res.status(200).json(branch);
            }
            catch (error) {
                next(error);
            }
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { brancheId } = req.params;
                const branch = yield this.branchRepository.remove(brancheId);
                res.status(200).json(branch);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.BranchController = BranchController;
