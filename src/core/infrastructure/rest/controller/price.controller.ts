import { Request, Response, NextFunction } from "express";
import { PriceRepository } from "../../../domain/repository/price.repository";
import { Price } from "../../entity/price.entity";

export class PriceController {
  constructor(private priceRepository: PriceRepository<Price>) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      const price = await this.priceRepository.create(body);
      res.status(200).json(price);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const prices = await this.priceRepository.list();
      res.status(200).json(prices);
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { precioId } = req.params;
      const price = await this.priceRepository.get(precioId);
      res.status(200).json(price);
    } catch (error) {
      next(error);
    }
  }

  async update(req :Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { precioId } = req.params;
      const body = req.body;
      const price = await this.priceRepository.update(precioId, body);
      res.status(200).json(price);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { precioId } = req.params;
      const price = await this.priceRepository.remove(precioId);
      res.status(200).json(price);
    } catch (error) {
      next(error);
    }
  }
}