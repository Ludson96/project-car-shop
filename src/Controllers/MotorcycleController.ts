import { Request, Response, NextFunction } from 'express';
import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcyclesService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    try {
      const moto: IMotorcycles = this.req.body;
      const newMoto = await this.service.create(moto);
      return this.res.status(201).json(newMoto);
    } catch (e) {
      this.next(e);
    }
  }

  public async getAllMoto() {
    try {
      const allMoto = await this.service.getAllMoto();
      return this.res.status(200).json(allMoto);
    } catch (e) {
      this.next(e);
    }
  }

  public async getMotoById() {
    try {
      const { id } = this.req.params;
      const moto = await this.service.getMotoById(id);
      return this.res.status(200).json(moto);
    } catch (e) {
      this.next(e);
    }
  }

  public async updateMoto() {
    try {
      const input = this.req.body;
      const { id } = this.req.params;
      const updatedMoto = await this.service.updateMoto(id, input);
      return this.res.status(200).json(updatedMoto);
    } catch (e) {
      this.next(e);
    }
  }

  public async deleteMoto() {
    try {
      const { id } = this.req.params;
      await this.service.deleteMoto(id);
      return this.res.status(204).json({});
    } catch (e) {
      this.next(e);
    }
  }
}