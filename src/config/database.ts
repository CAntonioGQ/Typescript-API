import { DataSource } from "typeorm";

import { Client } from "../entity/client.entity";

export default new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "sushiapp",
  entities: [Client],
  synchronize: true,
  logging: false
});