"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierModel = void 0;
class SupplierModel {
    get getIdSupplier() {
        return this.idSupplier;
    }
    set setIdSupplier(idSupplier) {
        this.idSupplier = idSupplier;
    }
    get getNameSupplier() {
        return this.nameSupplier;
    }
    set setNameSupplier(nameSupplier) {
        this.nameSupplier = nameSupplier;
    }
    get getContactName() {
        return this.contactName;
    }
    set setContactName(contactName) {
        this.contactName = contactName;
    }
    get getContactEmail() {
        return this.contactEmail;
    }
    set setContactEmail(contactEmail) {
        this.contactEmail = contactEmail;
    }
    get getContactPhone() {
        return this.contactPhone;
    }
    set setContactPhone(contactPhone) {
        this.contactPhone = contactPhone;
    }
    get getStatus() {
        return this.status;
    }
    set setStatus(status) {
        this.status = status;
    }
}
exports.SupplierModel = SupplierModel;
SupplierModel.ENABLE = 1;
SupplierModel.DISABLE = 2;
SupplierModel.LOCK = 3;
SupplierModel.PENDING = 4;
SupplierModel.DELETE = 99;
