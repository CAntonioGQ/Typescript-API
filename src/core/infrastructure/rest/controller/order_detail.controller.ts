import { NextFunction, Request, Response } from "express";
import { OrderDetailRepository } from "../../../domain/repository/order_detail.repository";
import { OrderDetail } from "../../entity/order_detail";

export class OrderDetailController {
  constructor(private orderDetailRepository: OrderDetailRepository<OrderDetail>) { }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      const orderDetail = await this.orderDetailRepository.create(body);
      res.status(200).json(orderDetail);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const ordersDetail = await this.orderDetailRepository.list();
      res.status(200).json(ordersDetail);
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { detalleDeOrdenId } = req.params;
      const orderDetail = await this.orderDetailRepository.get(detalleDeOrdenId);
      res.status(200).json(orderDetail);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { detalleDeOrdenId } = req.params;
      const body = req.body;
      const orderDetail = await this.orderDetailRepository.update(detalleDeOrdenId, body);
      res.status(200).json(orderDetail);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { detalleDeOrdenId } = req.params;
      const orderDetail = await this.orderDetailRepository.remove(detalleDeOrdenId);
      res.status(200).json(orderDetail);
    } catch (error) {
      next(error);
    }
  }
}
