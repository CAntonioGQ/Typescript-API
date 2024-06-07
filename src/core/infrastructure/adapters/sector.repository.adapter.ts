import { NotFound } from 'http-errors';
import database from "../../../config/database/database";
import { SectorModel } from "../../domain/models/sector";
import { SectorRepository, Id, Query } from "../../domain/repository/sector.repository";
import { Sector } from "../entity/sector.entity";

export class SectorAdapterRepository implements SectorRepository<Sector> {
  async create(data: Partial<Sector>, query?: Query): Promise<Sector> {
    const repository = database.getRepository(Sector);
    const sector = repository.create({
      ...data,
      status: SectorModel.ENABLE
    });
    await repository.save(sector)
    return sector
  }
  async list(query?: Query): Promise<Sector[]>{
    const repository = database.getRepository(Sector)
    return repository.find()
  }
  async get(id: Id, query?: Query): Promise<Sector>{
    const repository = database.getRepository(Sector);
    const sector = await repository.findOneBy({ idSector: id as number })
    if (!sector) {
      throw new NotFound("No exister un sector con el id proporcionado")
    }
    return sector;
  }
  async update(id: Id, data: Sector, query?: Query): Promise<Sector> {
    const repository = database.getRepository(Sector);
    await repository.update(id, data);
    return this.get(id, data)
  }
  async remove(id: Id, query?: Query): Promise<Sector> {
    const repository = database.getRepository(Sector);
    const sector = await this.get(id, query)
    if (!sector) {
      throw new NotFound("Sector doesn't exist")
    }
    sector.status = SectorModel.DELETE;
    await repository.save(sector)
    return sector
  }
}