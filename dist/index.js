"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database/database"));
const client_routes_1 = __importDefault(require("./core/infrastructure/rest/routes/client.routes"));
const employee_routes_1 = __importDefault(require("./core/infrastructure/rest/routes/employee.routes"));
const product_routes_1 = __importDefault(require("./core/infrastructure/rest/routes/product.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const supplier_routes_1 = __importDefault(require("./core/infrastructure/rest/routes/supplier.routes"));
const price_routes_1 = __importDefault(require("./core/infrastructure/rest/routes/price.routes"));
const inventory_routes_1 = __importDefault(require("./core/infrastructure/rest/routes/inventory.routes"));
const branch_routes_1 = __importDefault(require("./core/infrastructure/rest/routes/branch.routes"));
const order_detail_routes_1 = __importDefault(require("./core/infrastructure/rest/routes/order_detail.routes"));
const order_routes_1 = __importDefault(require("./core/infrastructure/rest/routes/order.routes"));
const sector_routes_1 = __importDefault(require("./core/infrastructure/rest/routes/sector.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
database_1.default.initialize()
    .then(() => console.log("Database connected"))
    .catch(console.error);
app.use('/api', branch_routes_1.default, client_routes_1.default, employee_routes_1.default, inventory_routes_1.default, order_detail_routes_1.default, order_routes_1.default, price_routes_1.default, product_routes_1.default, sector_routes_1.default, supplier_routes_1.default);
app.listen(PORT, () => {
    console.log('App executing on port: ' + PORT);
});
