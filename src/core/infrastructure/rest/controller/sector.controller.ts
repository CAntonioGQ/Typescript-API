import { NextFunction, Request, Response } from 'express';
import { SectorRepository } from '../../../domain/repository/sector.repository';
import { Sector } from '../../entity/sector.entity';

export class SectorController {
  constructor(private sectorRepository: SectorRepository<Sector>) { }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      const sector = await this.sectorRepository.create(body);
      res.status(200).json(sector);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const sectors = await this.sectorRepository.list();
      res.status(200).json(sectors);
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { sectoresId } = req.params;
      const sector = await this.sectorRepository.get(sectoresId);
      res.status(200).json(sector);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { sectoresId } = req.params;
      const body = req.body;
      const sector = await this.sectorRepository.update(sectoresId, body);
      res.status(200).json(sector);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { sectoresId } = req.params;
      const sector = await this.sectorRepository.remove(sectoresId);
      res.status(200).json(sector);
    } catch (error) {
      next(error);
    }
  }

}