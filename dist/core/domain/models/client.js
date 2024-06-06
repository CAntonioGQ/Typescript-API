"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModel = void 0;
class ClientModel {
    get getIdClient() {
        return this.idClient;
    }
    set setIdClient(idClient) {
        this.idClient = idClient;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getNumber() {
        return this.number;
    }
    set setNumber(number) {
        this.number = number;
    }
    get getEmail() {
        return this.email;
    }
    set setEmail(email) {
        this.email = email;
    }
    get getStatus() {
        return this.status;
    }
    set setStatus(status) {
        this.status = status;
    }
}
exports.ClientModel = ClientModel;
ClientModel.ENABLE = 1;
ClientModel.DISABLE = 2;
ClientModel.LOCK = 3;
ClientModel.PENDING = 4;
ClientModel.DELETE = 99;
