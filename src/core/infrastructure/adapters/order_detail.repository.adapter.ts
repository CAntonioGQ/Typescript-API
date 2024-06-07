import { NotFound } from 'http-errors';
import database from "../../../config/database/database";
import { OrderDetailRepository, Id, Query } from '../../domain/repository/order_detail.repository';
import { OrderDetail } from '../entity/order_detail';
import { OrderDetailModel } from '../../domain/models/order_detail';

export class OrderDetailAdapterRepository implements OrderDetailRepository<OrderDetail> {
  async create(data: Partial<OrderDetail>, query?: Query): Promise<OrderDetail> {
    const repository = database.getRepository(OrderDetail);
    const orderDetail = repository.create({
      ...data,
      status: OrderDetailModel.ENABLE
    });
    await repository.save(orderDetail)
    return orderDetail;
  }
  async list(query?: Query): Promise<OrderDetail[]>{
    const repository = database.getRepository(OrderDetail);
    return repository.find()
  }
  async get(id: Id, query?: Query): Promise<OrderDetail> {
    const repository = database.getRepository(OrderDetail);
    const orderDetail = await repository.findOneBy({ idOrderDetail: id as number });
    if (!orderDetail) {
      throw new NotFound("No existe una orden con el id proporcionado")
    }
    return orderDetail;
  }
  async update(id: Id, data: OrderDetail, query?: Query): Promise<OrderDetail> {
    const repository = database.getRepository(OrderDetail);
    await repository.update(id, data);
    return this.get(id, query);
  }
  async remove(id: Id, query?: Query): Promise<OrderDetail> {
    const repository = database.getRepository(OrderDetail);
    const orderDetail = await this.get(id, query);
    if (!orderDetail) {
      throw NotFound("orderDetail doesn't exist")
    }
    orderDetail.status = OrderDetailModel.DELETE;
    await repository.save(orderDetail);
    return orderDetail;
  }
  
}