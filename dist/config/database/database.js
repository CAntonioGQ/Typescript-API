"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const client_entity_1 = require("../../core/infrastructure/entity/client.entity");
const employee_entity_1 = require("../../core/infrastructure/entity/employee.entity");
const product_entity_1 = require("../../core/infrastructure/entity/product.entity");
const supplier_entity_1 = require("../../core/infrastructure/entity/supplier.entity");
const price_entity_1 = require("../../core/infrastructure/entity/price.entity");
const branch_entity_1 = require("../../core/infrastructure/entity/branch.entity");
const inventory_entity_1 = require("../../core/infrastructure/entity/inventory.entity");
const order_detail_1 = require("../../core/infrastructure/entity/order_detail");
const order_entity_1 = require("../../core/infrastructure/entity/order.entity");
const sector_entity_1 = require("../../core/infrastructure/entity/sector.entity");
exports.default = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "sushiapp",
    entities: [branch_entity_1.Branch, client_entity_1.Client, employee_entity_1.Employee, inventory_entity_1.Inventory, order_detail_1.OrderDetail, order_entity_1.Order, product_entity_1.Product, sector_entity_1.Sector, supplier_entity_1.Supplier, price_entity_1.Price],
    synchronize: false,
    logging: false
});
