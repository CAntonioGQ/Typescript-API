import { DataSource } from "typeorm";

import { Client } from "../../core/infrastructure/entity/client.entity";
import { Employee } from "../../core/infrastructure/entity/employee.entity";
import { Product } from "../../core/infrastructure/entity/product.entity";
import { Supplier } from "../../core/infrastructure/entity/supplier.entity";
import { Price } from "../../core/infrastructure/entity/price.entity";

export default new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "sushiapp",
  entities: [Client, Employee, Product, Supplier, Price],
  synchronize: false,

  logging: false
});