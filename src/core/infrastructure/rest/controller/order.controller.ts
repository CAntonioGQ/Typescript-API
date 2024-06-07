import { NextFunction, Request, Response } from "express";
import { OrderRepository } from "../../../domain/repository/order.repository";
import { Order } from "../../entity/order.entity";

export class OrderController {
  constructor(private orderRepository: OrderRepository<Order>) { }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      const order = await this.orderRepository.create(body);
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const orders = await this.orderRepository.list();
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { ordenId } = req.params;
      const order = await this.orderRepository.get(ordenId);
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { ordenId } = req.params;
      const body = req.body;
      const order = await this.orderRepository.update(ordenId, body);
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { ordenId } = req.params;
      const order = await this.orderRepository.remove(ordenId);
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }
}
