"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = void 0;
class EmployeeModel {
    get getIdEmployee() {
        return this.idEmployee;
    }
    set setIdEmployee(idEmployee) {
        this.idEmployee = idEmployee;
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
    get getAddress() {
        return this.address;
    }
    set setAddress(address) {
        this.address = address;
    }
}
exports.EmployeeModel = EmployeeModel;
EmployeeModel.ENABLE = 1;
EmployeeModel.DISABLE = 2;
EmployeeModel.LOCK = 3;
EmployeeModel.PENDING = 4;
EmployeeModel.DELETE = 99;
