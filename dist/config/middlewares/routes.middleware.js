"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_routes_1 = __importDefault(require("../../routes/client.routes"));
const employee_routes_1 = __importDefault(require("../../routes/employee.routes"));
const product_routes_1 = __importDefault(require("../../routes/product.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api', client_routes_1.default, employee_routes_1.default, product_routes_1.default);
