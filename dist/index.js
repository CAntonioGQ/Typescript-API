"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database/database"));
const client_routes_1 = __importDefault(require("./routes/client.routes"));
const employee_routes_1 = __importDefault(require("./routes/employee.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const price_routes_1 = __importDefault(require("./routes/price.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
database_1.default.initialize()
    .then(() => console.log("Database connected"))
    .catch(console.error);
app.use('/api', client_routes_1.default, employee_routes_1.default, product_routes_1.default, price_routes_1.default);
app.listen(PORT, () => {
    console.log('App executing on port: ' + PORT);
});
