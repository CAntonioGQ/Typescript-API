import { Request, Response, NextFunction } from "express";
import { SupplierRepository } from "../../../domain/repository/supplier.repository";
import { Supplier } from "../../entity/supplier.entity";

export class SupplierController {
    constructor(private supplierRepository: SupplierRepository<Supplier>) { }

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body;
            const supplier = await this.supplierRepository.create(body);
            res.status(200).json(supplier);
        } catch (error) {
            next(error);
        }
    }

    async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const suppliers = await this.supplierRepository.list();
            res.status(200).json(suppliers);
        } catch (error) {
            next(error);
        }
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { proveedoresId } = req.params;
            const supplier = await this.supplierRepository.get(proveedoresId);
            res.status(200).json(supplier);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { proveedoresId } = req.params;
            const body = req.body;
            const supplier = await this.supplierRepository.update(proveedoresId, body);
            res.status(200).json(supplier);
        } catch (error) {
            next(error);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { proveedoresId } = req.params;
            const supplier = await this.supplierRepository.remove(proveedoresId);
            res.status(200).json(supplier);
        } catch (error) {
            next(error);
        }
    }
}
