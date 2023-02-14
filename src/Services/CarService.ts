import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import StatusError from '../utils/StatusError';

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
    const allCars = await carODM.getAllCars();
    const result = allCars.map((car) => this.createCarDomain(car));
    return result;
  }

  public async getCarById(_id: string): Promise<Car | null> {
    if (!isValidObjectId(_id)) throw new StatusError(422, 'Invalid mongo id');
    const carODM = new CarODM();
    const car = await carODM.getCarById(_id);
    if (!car) throw new StatusError(404, 'Car not found');
    const result = this.createCarDomain(car);
    return result;
  }

  public async updateCar(_id: string, input: ICar) {
    if (!isValidObjectId(_id)) throw new StatusError(422, 'Invalid mongo id');
    const carODM = new CarODM();
    const updatedCar = await carODM.updateCar(_id, input);
    if (!updatedCar) throw new StatusError(404, 'Car not found');
    const result = this.createCarDomain(updatedCar);
    return result;
  }
}