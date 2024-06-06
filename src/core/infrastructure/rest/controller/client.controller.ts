import { Request, Response, NextFunction } from "express";
import { ClientRepository } from "../../../domain/repository/client.repository";
import { Client } from "../../entity/client.entity";

export class ClientController {
  constructor(private clientRepository: ClientRepository<Client>) { }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      const client = await this.clientRepository.create(body);
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
      const { clienteId } = req.params;
      const client = await this.clientRepository.get(clienteId);
      res.status(200).json(client);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { clienteId } = req.params;
      const body = req.body;
      const client = await this.clientRepository.update(clienteId, body);
      res.status(200).json(client);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { clienteId } = req.params;
      const client = await this.clientRepository.remove(clienteId);
      res.status(200).json(client);
    } catch (error) {
      next(error);
    }
  }
}
