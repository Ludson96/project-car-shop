import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

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

  public async getAllCars(): Promise<ICar[]> {
    const carODM = new CarODM();
    const allCars = await carODM.getAllCars();
    return allCars;
  }
}