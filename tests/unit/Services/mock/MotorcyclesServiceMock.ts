import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

export const validMotoInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const validMotoOutput: IMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f H',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const validAllMotoOutput: IMotorcycle[] = [
  {
    id: '6348513f34c397abcad040b2',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '6348513f34c397abcad040b2',
    model: 'Honda Cb 600f Horne',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '6348513f34c397abcad040b2',
    model: 'Honda Cb 600f Hornt',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
];

export const validId = '63eb83aac4630c947eb1678c';

export const invalidId = '63eb83aac4630c947eb1679c';