import { NotFound } from "http-errors";
import database from "../config/database/database";
import { ClientRepository, Id, Query } from "../repository/client.repository";
import { Client } from "../entity/client.entity";
import { ClientModel } from "../models/client";

export class ClientAdapterRepository implements ClientRepository<Client> {
  async create(data: Partial<Client>, query?: Query): Promise<Client> {
    const repository = database.getRepository(Client);
    const client = repository.create({
      ...data,
      status: ClientModel.ENABLE
    });
    await repository.save(client);
    return client;
  }

  async list(query?: Query): Promise<Client[]> {
    const repository = database.getRepository(Client);
    return repository.find();
  }

  async get(id: Id, query?: Query): Promise<Client> {
    const repository = database.getRepository(Client);
    const client = await repository.findOneBy({ idClient: id as number });
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
    if (!client) {
      throw new NotFound("Client does not exist");
    }
    client.status = ClientModel.DELETE;
    await repository.save(client);
    return client;
  }
}
