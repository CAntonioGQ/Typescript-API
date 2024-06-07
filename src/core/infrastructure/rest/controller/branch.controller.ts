import { NextFunction, Request, Response } from "express";
import { BranchRepository } from "../../../domain/repository/branch.repository";
import { Branch } from "../../entity/branch.entity";

export class BranchController {
  constructor(private branchRepository: BranchRepository<Branch>) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      const branch = await this.branchRepository.create(body);
      res.status(200).json(branch);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const branches = await this.branchRepository.list();
      res.status(200).json(branches);
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { sucursalId } = req.params;
      const branch = await this.branchRepository.get(sucursalId);
      res.status(200).json(branch);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { sucursalId } = req.params;
      const body = req.body;
      const branch = await this.branchRepository.update(sucursalId, body);
      res.status(200).json(branch);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { brancheId } = req.params;
      const branch = await this.branchRepository.remove(brancheId);
      res.status(200).json(branch);
    } catch (error) {
      next(error);
    }
  }

}