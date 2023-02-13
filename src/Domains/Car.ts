import ICar from '../Interfaces/ICar';

export default class Car {
  private _id: string | undefined;
  private _model: string;
  private _year: number;
  private _color: string;
  private _status: boolean;
  private _buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;

  constructor(car: ICar) {
    this._id = car.id;
    this._model = car.model;
    this._year = car.year;
    this._color = car.color;
    this._status = car.status || false;
    this._buyValue = car.buyValue;
    this._doorsQty = car.doorsQty;
    this._seatsQty = car.seatsQty;
  }

  public setId(id: string) {
    this._id = id;
  }

  public getId() {
    return this._id;
  }

  public setModel(car: ICar) {
    this._model = car.model;
  }

  public getModel() {
    return this._model;
  }

  public setYear(car: ICar) {
    this._year = car.year;
  }

  public getYear() {
    return this._year;
  }

  public setColor(car: ICar) {
    this._color = car.color;
  }

  public getColor() {
    return this._color;
  }

  public setStatus(status: boolean) {
    this._status = status;
  }

  public getStatus() {
    return this._status;
  }

  public setBuyValue(car: ICar) {
    this._buyValue = car.buyValue;
  }

  public getBuyValue() {
    return this._buyValue;
  }

  public setDoorsQty(car: ICar) {
    this._doorsQty = car.doorsQty;
  }

  public getDoorsQty() {
    return this._doorsQty;
  }

  public setSeatsQty(car: ICar) {
    this._seatsQty = car.seatsQty;
  }

  public getSeatsQty() {
    return this._seatsQty;
  }
}