import { Request, Response, NextFunction } from 'express';
import { InventoryRepository } from "../../../domain/repository/inventory.repository";
import { Inventory } from '../../entity/inventory.entity';

export class InventoryController {
  constructor(private inventoryRepository: InventoryRepository<Inventory>) { }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      const inventory = await this.inventoryRepository.create(body);
      res.status(200).json(inventory);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const inventories = await this.inventoryRepository.list();
      res.status(200).json(inventories);
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { inventarioId } = req.params;
      const inventory = await this.inventoryRepository.get(inventarioId);
      res.status(200).json(inventory);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { inventarioId } = req.params;
      const body = req.body;
      const inventory = await this.inventoryRepository.update(inventarioId, body);
      res.status(200).json(inventory);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { inventarioId } = req.params;
      const inventory = await this.inventoryRepository.remove(inventarioId);
      res.status(200).json(inventory);
    } catch (error) {
      next(error);
    }
  }
}
