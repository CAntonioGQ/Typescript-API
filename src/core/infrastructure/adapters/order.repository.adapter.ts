import database from "../../../config/database/database";
import { OrderModel } from "../../domain/models/order";
import { OrderRepository, Id, Query } from "../../domain/repository/order.repository";
import { Order } from "../entity/order.entity";
import { NotFound } from 'http-errors';

export class OrderAdapterRepository implements OrderRepository<Order> {
  async create(data: Partial<Order>, query?: Query): Promise<Order> {
    const repository = database.getRepository(Order);
    const order = repository.create({
      ...data,
      status: OrderModel.ENABLE
    });
    await repository.save(order)
    return order;
  }
  async list(query?: Query): Promise<Order[]> {
    const repository = database.getRepository(Order);
    return repository.find()
  }
  async get(id: Id, query?: Query): Promise<Order> {
    const repository = database.getRepository(Order);
    const order = await repository.findOneBy({ idOrder: id as number })
    if (!order) {
      throw new NotFound("No existe una orden con el id proporcionado")
    }
    return order;
  }
  async update(id: Id, data: Order, query?: Query): Promise<Order> {
    const repository = database.getRepository(Order);
    await repository.update(id, data);
    return this.get(id, data);
  }
  async remove(id: Id, query?: Query): Promise<Order> {
    const repository = database.getRepository(Order);
    const order = await this.get(id, query);
    if (!order) {
      throw new NotFound("order doesn't exist")
    }
    order.status = OrderModel.DELETE;
    await repository.save(order);
    return order;
  }
}