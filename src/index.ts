import "reflect-metadata";
import express from "express";
import database from "./config/database/database";
import dotenv from "dotenv";

// import routes
import branchRouter from "./core/infrastructure/rest/routes/branch.routes";
import clientRouter from "./core/infrastructure/rest/routes/client.routes";
import employeeRouter from "./core/infrastructure/rest/routes/employee.routes";
import inventoryRouter from "./core/infrastructure/rest/routes/inventory.routes";
import orderDetailRouter from "./core/infrastructure/rest/routes/order_detail.routes";
import orderRouter from "./core/infrastructure/rest/routes/order.routes";
import priceRouter from "./core/infrastructure/rest/routes/price.routes";
import productRouter from "./core/infrastructure/rest/routes/product.routes";
import sectorRouter from "./core/infrastructure/rest/routes/sector.routes";
import supplierRouter from "./core/infrastructure/rest/routes/supplier.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

database.initialize()
  .then(() => console.log("Database connected"))
  .catch(console.error);

app.use('/api',branchRouter, clientRouter, employeeRouter, inventoryRouter, 
  orderDetailRouter, orderRouter, priceRouter, productRouter, sectorRouter, supplierRouter);

app.listen(PORT, () => {
  console.log('App executing on port: ' + PORT);
});
