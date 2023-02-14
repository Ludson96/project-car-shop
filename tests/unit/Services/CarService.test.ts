import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { 
  validCarInput,
  validCarOutput,
  validAllCarsOutput,
  validId,
  invalidId,
} from './mock/CarServiceMock';
import Car from '../../../src/Domains/Car';

const SUCESS = 'Com sucesso';

describe('Testando endpoint /cars', function () {
  let carService: CarService;

  beforeEach(function () {
    carService = new CarService();
  });

  describe('Criar um carro (post)', function () {
    it(SUCESS, async function () {
      const carOutput: Car = new Car(validCarOutput);
      sinon.stub(Model, 'create').resolves(carOutput);
      
      const result = await carService.create(validCarInput);
      
      expect(result).to.be.deep.equal(carOutput);
    });

    it('Caso input seja vazio', async function () {
      sinon.stub(Model, 'create').resolves();
      
      const result = await carService.create(validCarInput);
      
      expect(result).to.be.deep.equal(null);
    });

    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Listando todos os carros, endpoint "/cars" (get)', function () {
    it(SUCESS, async function () {
      sinon.stub(Model, 'find').resolves(validAllCarsOutput);

      const result = await carService.getAllCars();

      expect(result).to.be.deep.equal(validAllCarsOutput);
    });
  });

  describe('Listando carro específico, endpoint "/cars/:id" (get)', function () {
    it(SUCESS, async function () {
      sinon.stub(Model, 'findById').resolves(validCarOutput);

      const result = await carService.getCarById(validId);

      expect(result).to.be.deep.equal(validCarOutput);
    });

    it('Caso o id seja invalido', async function () {
      try {
        carService.getCarById('eu sou um id invalido');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });

    it('Caso o id não exista no banco', async function () {
      try {
        sinon.stub(Model, 'findById').resolves();
        await carService.getCarById(invalidId);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });

    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Atualizando carros, endpoint "/cars/:id (put)"', function () {
    it(SUCESS, async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(validCarOutput);

      const result = await carService.updateCar(validId, validCarOutput);

      expect(result).to.be.deep.equal(validCarOutput);
    });

    it('Caso o id seja invalido', async function () {
      try {
        carService.updateCar('eu sou um id invalido', validCarOutput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });

    it('Caso o id não exista no banco', async function () {
      try {
        sinon.stub(Model, 'findByIdAndUpdate').resolves();
        await carService.updateCar(invalidId, validCarOutput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });

    afterEach(function () {
      sinon.restore();
    });
  });
});