"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
class ClientController {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async create(req, res, next) {
        try {
            const body = req.body;
            const client = await this.clientRepository.create(body);
            res.status(200).json(client);
        }
        catch (error) {
            next(error);
        }
    }
    async list(req, res, next) {
        try {
            const clients = await this.clientRepository.list();
            res.status(200).json(clients);
        }
        catch (error) {
            next(error);
        }
    }
    async get(req, res, next) {
        try {
            const { clienteId } = req.params;
            const client = await this.clientRepository.get(clienteId);
            res.status(200).json(client);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const { clienteId } = req.params;
            const body = req.body;
            const client = await this.clientRepository.update(clienteId, body);
            res.status(200).json(client);
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            const { clienteId } = req.params;
            const client = await this.clientRepository.remove(clienteId);
            res.status(200).json(client);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ClientController = ClientController;
