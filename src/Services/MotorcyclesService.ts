import { isValidObjectId } from 'mongoose';
import Motorcycles from '../Domains/Motorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';
import StatusError from '../utils/StatusError';
import IMotorcycles from '../Interfaces/IMotorcycle';

const INVALID_ID = 'Invalid mongo id';
const NOT_FOUND = 'Motorcycle not found';

export default class MotorcyclesService {
  private createMotorcycleDomain(moto: IMotorcycles) {
    if (moto) return new Motorcycles(moto);
    
    return null;
  }

  public async create(moto: IMotorcycles): Promise<Motorcycles | null> {
    const motoODM = new MotorcyclesODM();
    const newMoto = await motoODM.create(moto);
    return this.createMotorcycleDomain(newMoto);
  }

  public async getAllMoto(): Promise<(Motorcycles | null)[]> {
    const motoODM = new MotorcyclesODM();
    const allMoto = await motoODM.getAll();
    const result = allMoto.map((car) => this.createMotorcycleDomain(car));
    return result;
  }

  public async getMotoById(_id: string): Promise<Motorcycles | null> {
    if (!isValidObjectId(_id)) throw new StatusError(422, INVALID_ID);
    const motoODM = new MotorcyclesODM();
    const moto = await motoODM.getById(_id);
    if (!moto) throw new StatusError(404, NOT_FOUND);
    const result = this.createMotorcycleDomain(moto);
    return result;
  }

  public async updateMoto(_id: string, input: IMotorcycles) {
    if (!isValidObjectId(_id)) throw new StatusError(422, INVALID_ID);
    const motoODM = new MotorcyclesODM();
    const updatedMoto = await motoODM.update(_id, input);
    if (!updatedMoto) throw new StatusError(404, NOT_FOUND);
    const result = this.createMotorcycleDomain(updatedMoto);
    return result;
  }

  public async deleteMoto(_id: string): Promise<IMotorcycles> {
    if (!isValidObjectId(_id)) throw new StatusError(422, INVALID_ID);
    const motoODM = new MotorcyclesODM();
    const result = await motoODM.delete(_id);
    if (!result) throw new StatusError(404, NOT_FOUND);
    return result;
  }
}