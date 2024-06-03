import "reflect-metadata";

import express from "express";

import database from "./config/database";

import clientRouter from "./routes/client.routes";
import employeeRouter from "./routes/employee.routes";
import productRouter from "./routes/product.routes";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

database.initialize()
  .then(() => console.log("Database connected"))
  .catch(console.error)

app.use('/api', clientRouter, employeeRouter, productRouter);

app.listen(3030, ()=> {
  console.log("App execute in port:3030");
});