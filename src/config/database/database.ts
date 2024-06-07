import { DataSource } from "typeorm";

import { Client } from "../../core/infrastructure/entity/client.entity";
import { Employee } from "../../core/infrastructure/entity/employee.entity";
import { Product } from "../../core/infrastructure/entity/product.entity";
import { Supplier } from "../../core/infrastructure/entity/supplier.entity";
import { Price } from "../../core/infrastructure/entity/price.entity";
import { Branch } from "../../core/infrastructure/entity/branch.entity";
import { Inventory } from "../../core/infrastructure/entity/inventory.entity";
import { OrderDetail } from "../../core/infrastructure/entity/order_detail";
import { Order } from "../../core/infrastructure/entity/order.entity";
import { Sector } from "../../core/infrastructure/entity/sector.entity";

export default new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "sushiapp",
  entities: [Branch, Client, Employee, Inventory, OrderDetail, Order, Product, Sector, Supplier, Price],
  synchronize: false,

  logging: false
});