"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorModel = void 0;
class SectorModel {
    get getIdSector() {
        return this.idSector;
    }
    set setIdSector(idSector) {
        this.idSector = idSector;
    }
    get getSector() {
        return this.sector;
    }
    set setSector(sector) {
        this.sector = sector;
    }
}
exports.SectorModel = SectorModel;
SectorModel.ENABLE = 1;
SectorModel.DISABLE = 2;
SectorModel.LOCK = 3;
SectorModel.PENDING = 4;
SectorModel.DELETE = 99;
