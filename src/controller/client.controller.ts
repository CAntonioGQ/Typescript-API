import { Request, Response, NextFunction } from "express"

import { ClientRepository } from "../repository/client.repository";
import { Client } from "../entity/client.entity";

export class prestamoController {
  constructor(private repository: ClientRepository<Client>) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
  
      const prestamo = await this.repository.create(body)
  
      res.status(200).json(prestamo);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const prestamos = await this.repository.list();
      res.status(200).json(prestamos); 
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { prestamoId } = req.params;

      const task = await this.repository.get(prestamoId)

      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { prestamoId } = req.params;
      const body = req.body;

      const prestamo = await this.repository.update(prestamoId, body);
      
      res.status(200).json(prestamo); 
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { prestamoId } = req.params;

      const task = await this.repository.remove(prestamoId);
      
      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }
}