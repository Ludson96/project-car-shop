import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { validCarInput, validCarOutput, validAllCarsOutput } from './mock/CarServiceMock';
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

  describe('Listando carros', function () {
    describe('Listando todos os carros, endpoint "/cars" (get)', function () {
      it(SUCESS, async function () {
        sinon.stub(Model, 'find').resolves(validAllCarsOutput);

        const result = await carService.getAllCars();

        expect(result).to.be.deep.equal(validAllCarsOutput);
      });

      afterEach(function () {
        sinon.restore();
      });
    });

    describe('Listando carro específico, endpoint "/cars:id" (get)', function () {
      it(SUCESS, async function () {
        sinon.stub(Model, 'findById').resolves(validAllCarsOutput);

        const result = await carService.getCarById(id);

        expect(result).to.be.deep.equal(validAllCarsOutput);
        
      });

      afterEach(function () {
        sinon.restore();
      });
    });
  });
});