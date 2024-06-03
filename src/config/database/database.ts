import { DataSource } from "typeorm";

import { Client } from "../../entity/client.entity";
import { Employee } from "../../entity/employee.entity";
import { Product } from "../../entity/product.entity";

export default new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "sushiapp",
  entities: [Client, Employee, Product],
  synchronize: true,
  logging: false
});