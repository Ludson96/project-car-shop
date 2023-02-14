import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { validCarInput, validCarOutput } from './mock/CarServiceMock';
import Car from '../../../src/Domains/Car';

const SUCESS = 'Com sucesso';

describe('Testando endpoint /cars', function () {
  describe('Criar um carro (post)', function () {
    it(SUCESS, async function () {
      const carOutput: Car = new Car(validCarOutput);
      sinon.stub(Model, 'create').resolves(carOutput);
      
      const service = new CarService();
      const result = await service.create(validCarInput);
      
      expect(result).to.be.deep.equal(carOutput);
    });

    it('Caso input seja vazio', async function () {
      sinon.stub(Model, 'create').resolves();
      
      const service = new CarService();
      const result = await service.create(validCarInput);
      
      expect(result).to.be.deep.equal(null);
    });

    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Listando carros', function () {
    describe('Listando todos os carros, endpoint "/cars" (get)', function () {
      it(SUCESS, function () {
        sinon.stub(Model, 'find').resolves();
        
      });

      afterEach(function () {
        sinon.restore();
      });
    });
    describe('Listando carro específico, endpoint "/cars:id" (get)', function () {
      it(SUCESS, function () {
        
      });

      afterEach(function () {
        sinon.restore();
      });
    });
  });
});