"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const prestamos_routes_1 = __importDefault(require("./routes/prestamos.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
database_1.default.initialize()
    .then(() => console.log("Database connected"))
    .catch(console.error);
app.use('/api', prestamos_routes_1.default);
app.listen(3030, () => {
    console.log("App execute in port:3030");
});
