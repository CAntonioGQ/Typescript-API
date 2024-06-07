import { NotFound } from 'http-errors';
import database from "../../../config/database/database";
import { BranchRepository, Id, Query } from "../../domain/repository/branch.repository";
import { Branch } from "../entity/branch.entity";
import { BranchModel } from "../../domain/models/branch";

export class BranchAdapterRepository implements BranchRepository<Branch> {
  async create(data: Partial<Branch>, query?: Query): Promise<Branch> {
    const repository = database.getRepository(Branch);
    const branch = repository.create({
      ...data,
      status: BranchModel.ENABLE
    });
    await repository.save(branch);
    return branch;
  }
  async list(query?: Query): Promise<Branch[]> {
    const repository = database.getRepository(Branch);
    return repository.find();
  }

  async get(id: Id, query?: Query): Promise<Branch> {
    const repository = database.getRepository(Branch);
    const branch = await repository.findOneBy({ idBranch: id as number });
    if (!branch) {
      throw new NotFound("No existe una sucursal con el id proporcionado");
    }
    return branch;
  }

  async update(id: Id, data: Branch, query?: Query): Promise<Branch> {
    const repository = database.getRepository(Branch);
    await repository.update(id, data);
    return this.get(id, query);
  }

  async remove(id: Id, query?: Query): Promise<Branch> {
    const repository = database.getRepository(Branch);
    const branch = await this.get(id, query);
    if (!branch) {
      throw new NotFound("Branch does not exist");
    }
    branch.status = BranchModel.DELETE;
    await repository.save(branch);
    return branch;
  }
}
