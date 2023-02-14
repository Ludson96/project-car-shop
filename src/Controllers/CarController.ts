import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = this.req.body;

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (e) {
      this.next(e);
    }
  }

  public async getAllCars() {
    try {
      const allCars = await this.service.getAllCars();
      return this.res.status(200).json(allCars);
    } catch (e) {
      this.next(e);
    }
  }

  public async getCarById() {
    const { id } = this.req.params;

    try {
      const car = await this.service.getCarById(id);
      return this.res.status(200).json(car);
    } catch (e) {
      this.next(e);
    }
  }

  public async updateCar() {
    try {
      const input = this.req.body;
      const { id } = this.req.params;
      const updatedCar = await this.service.updateCar(id, input);
      return this.res.status(200).json(updatedCar);
    } catch (e) {
      this.next(e);
    }
  }
}