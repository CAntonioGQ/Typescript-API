import "reflect-metadata";
import express from "express";
import database from "./config/database/database";
import clientRouter from "./routes/client.routes";
import employeeRouter from "./routes/employee.routes";
import productRouter from "./routes/product.routes";
import dotenv from "dotenv";
import supplierRouter from "./routes/supplier.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

database.initialize()
  .then(() => console.log("Database connected"))
  .catch(console.error);

app.use('/api', clientRouter, employeeRouter, productRouter, supplierRouter);

app.listen(PORT, () => {
  console.log('App executing on port: ' + PORT);
});
