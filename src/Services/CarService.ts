import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import StatusError from '../utils/StatusError';

const INVALID_ID = 'Invalid mongo id';
const NOT_FOUND = 'Car not found';

export default class CarService {
  private createCarDomain(car: ICar | null) {
    if (car) {
      return new Car(car);
    }

    return null;
  }

  public async create(car: ICar): Promise<Car | null> {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars(): Promise<(Car | null)[]> {
    const carODM = new CarODM();
    const allCars = await carODM.getAll();
    const result = allCars.map((car) => this.createCarDomain(car));
    return result;
  }

  public async getCarById(_id: string): Promise<Car | null> {
    if (!isValidObjectId(_id)) throw new StatusError(422, INVALID_ID);
    const carODM = new CarODM();
    const car = await carODM.getById(_id);
    if (!car) throw new StatusError(404, NOT_FOUND);
    const result = this.createCarDomain(car);
    return result;
  }

  public async updateCar(_id: string, input: ICar):Promise<Car | null> {
    if (!isValidObjectId(_id)) throw new StatusError(422, INVALID_ID);
    const carODM = new CarODM();
    const updatedCar = await carODM.update(_id, input);
    if (!updatedCar) throw new StatusError(404, NOT_FOUND);
    const result = this.createCarDomain(updatedCar);
    return result;
  }

  public async deleteCar(_id: string): Promise<ICar> {
    if (!isValidObjectId(_id)) throw new StatusError(422, INVALID_ID);
    const carODM = new CarODM();
    const result = await carODM.delete(_id);
    if (!result) throw new StatusError(404, NOT_FOUND);
    return result;
  }
}