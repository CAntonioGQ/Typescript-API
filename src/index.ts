import "reflect-metadata";
import express from "express";
import database from "./config/database/database";
import clientRouter from "./core/infrastructure/rest/routes/client.routes";
import employeeRouter from "./core/infrastructure/rest/routes/employee.routes";
import productRouter from "./core/infrastructure/rest/routes/product.routes";
import dotenv from "dotenv";
import supplierRouter from "./core/infrastructure/rest/routes/supplier.routes";
import priceRouter from "./core/infrastructure/rest/routes/price.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

database.initialize()
  .then(() => console.log("Database connected"))
  .catch(console.error);

app.use('/api', clientRouter, employeeRouter, productRouter, priceRouter, supplierRouter);

app.listen(PORT, () => {
  console.log('App executing on port: ' + PORT);
});
