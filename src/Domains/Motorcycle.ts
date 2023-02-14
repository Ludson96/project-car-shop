import IMotorcycles from '../Interfaces/IMotorcycle';

export default class Motorcycles {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(moto: IMotorcycles) {
    this.id = moto.id;
    this.model = moto.model;
    this.year = moto.year;
    this.color = moto.color;
    this.status = moto.status || false;
    this.buyValue = moto.buyValue;
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(car: IMotorcycles) {
    this.model = car.model;
  }

  public getModel() {
    return this.model;
  }

  public setYear(car: IMotorcycles) {
    this.year = car.year;
  }

  public getYear() {
    return this.year;
  }

  public setColor(car: IMotorcycles) {
    this.color = car.color;
  }

  public getColor() {
    return this.color;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }

  public setBuyValue(car: IMotorcycles) {
    this.buyValue = car.buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setCategory(car: IMotorcycles) {
    this.category = car.category;
  }

  public getCategory() {
    return this.category;
  }

  public setEngineCapacity(car: IMotorcycles) {
    this.engineCapacity = car.engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}