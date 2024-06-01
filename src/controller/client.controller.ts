import { Request, Response, NextFunction } from "express"

import { ClientRepository } from "../repository/client.repository";
import { Client } from "../entity/client.entity";

export class clientController {
  constructor(private clientRepository: ClientRepository<Client>) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
  
      const client = await this.clientRepository.create(body)
  
      res.status(200).json(client);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const clients = await this.clientRepository.list();
      res.status(200).json(clients); 
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { clientId } = req.params;

      const client = await this.clientRepository.get(clientId)

      res.status(200).json(client);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { clientId } = req.params;
      const body = req.body;

      const client = await this.clientRepository.update(clientId, body);
      
      res.status(200).json(client); 
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { clientId } = req.params;

      const client = await this.clientRepository.remove(clientId);
      
      res.status(200).json(client);
    } catch (error) {
      next(error);
    }
  }
}