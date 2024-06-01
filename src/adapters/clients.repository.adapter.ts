import { NotFound } from "http-errors";

import database from "../config/database";

import { DatabaseRepository, Id, Query } from "../repository/declarations.repository";
import { Client } from "../entity/client";

export class ClientAdapterRepository implements DatabaseRepository<Client> {
  async create(data: Partial<Client>, query?: Query): Promise<Client> {
    const repository = database.getRepository(Client);

    const client = repository.create(data);

    await repository.save(client);

    return client;
  }

  async list(query?: Query): Promise<Client[]> {
    const repository = database.getRepository(Client);

    return repository.find();
  }

  async get(id: Id, query?: Query): Promise<Client> {
    const repository = database.getRepository(Client);

    const client = await repository.findOneBy({ idClient: id as any });
    
    if (!client) {
      throw new NotFound("Client does not exist");
    }

    return client;
  }

  async update(id: Id, data: Client, query?: Query): Promise<Client> {
    const repository = database.getRepository(Client);

    await repository.update(id, data);

    return this.get(id, query);
  }

  async remove(id: Id, query?: Query): Promise<Client> {
    const repository = database.getRepository(Client);

    const client = await this.get(id, query);

    await repository.delete(id);

    return client;
  }
}