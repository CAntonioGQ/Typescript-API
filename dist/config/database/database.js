"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const client_entity_1 = require("../../core/infrastructure/entity/client.entity");
const employee_entity_1 = require("../../core/infrastructure/entity/employee.entity");
const product_entity_1 = require("../../core/infrastructure/entity/product.entity");
const supplier_entity_1 = require("../../core/infrastructure/entity/supplier.entity");
const price_entity_1 = require("../../core/infrastructure/entity/price.entity");
exports.default = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "sushiapp",
    entities: [client_entity_1.Client, employee_entity_1.Employee, product_entity_1.Product, supplier_entity_1.Supplier, price_entity_1.Price],
    synchronize: true,
    logging: false
});
