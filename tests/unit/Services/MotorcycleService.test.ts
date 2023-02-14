import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcyclesService from '../../../src/Services/MotorcyclesService';
import { 
  validMotoInput,
  validMotoOutput,
  validAllMotoOutput,
  validId,
  invalidId,
} from './mock/MotorcyclesServiceMock';
import Motorcycle from '../../../src/Domains/Motorcycle';

const SUCESS = 'Com sucesso';

describe('Testando endpoint /motorcycles', function () {
  let carService: MotorcyclesService;

  beforeEach(function () {
    carService = new MotorcyclesService();
  });

  describe('Criar uma moto (post)', function () {
    it(SUCESS, async function () {
      const carOutput: Motorcycle = new Motorcycle(validMotoOutput);
      sinon.stub(Model, 'create').resolves(carOutput);
      
      const result = await carService.create(validMotoInput);
      
      expect(result).to.be.deep.equal(carOutput);
    });

    it('Caso input seja vazio', async function () {
      sinon.stub(Model, 'create').resolves();
      
      const result = await carService.create(validMotoInput);
      
      expect(result).to.be.deep.equal(null);
    });

    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Listando todos as moto, endpoint "/motorcycles" (get)', function () {
    it(SUCESS, async function () {
      sinon.stub(Model, 'find').resolves(validAllMotoOutput);

      const result = await carService.getAllMoto();

      expect(result).to.be.deep.equal(validAllMotoOutput);
    });
  });

  describe('Listando moto específica, endpoint "/motorcycles/:id" (get)', function () {
    it(SUCESS, async function () {
      sinon.stub(Model, 'findById').resolves(validMotoOutput);

      const result = await carService.getMotoById(validId);

      expect(result).to.be.deep.equal(validMotoOutput);
    });

    it('Caso o id seja invalido', async function () {
      try {
        carService.getMotoById('eu sou um id invalido');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });

    it('Caso o id não exista no banco', async function () {
      try {
        sinon.stub(Model, 'findById').resolves();
        await carService.getMotoById(invalidId);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }
    });

    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Atualizando moto, endpoint "/motorcycles/:id (put)"', function () {
    it(SUCESS, async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(validMotoOutput);

      const result = await carService.updateMoto(validId, validMotoOutput);

      expect(result).to.be.deep.equal(validMotoOutput);
    });

    it('Caso o id seja invalido', async function () {
      try {
        carService.updateMoto('eu sou um id invalido', validMotoOutput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });

    it('Caso o id não exista no banco', async function () {
      try {
        sinon.stub(Model, 'findByIdAndUpdate').resolves();
        await carService.updateMoto(invalidId, validMotoOutput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }
    });

    afterEach(function () {
      sinon.restore();
    });
  });
});