import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(car: ICar) {
    this.model = car.model;
  }

  public getModel() {
    return this.model;
  }

  public setYear(car: ICar) {
    this.year = car.year;
  }

  public getYear() {
    return this.year;
  }

  public setColor(car: ICar) {
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

  public setBuyValue(car: ICar) {
    this.buyValue = car.buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setDoorsQty(car: ICar) {
    this.doorsQty = car.doorsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty(car: ICar) {
    this.seatsQty = car.seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}