import { model, Model, models, Schema, UpdateQuery } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(input: T): Promise<T> {
    return this.model.create({ ...input });
  }

  public async update(_id: string, input: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...input } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(_id: string): Promise<T | null> {
    return this.model.findById(_id);
  }

  public async delete(_id: string): Promise<T | null> {
    return this.model.findByIdAndDelete(_id).exec();
  }
}