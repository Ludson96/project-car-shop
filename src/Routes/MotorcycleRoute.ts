import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

router.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).getAllMoto(),
);

router.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getMotoById(),
);

router.put(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateMoto(),
);

router.delete(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).deleteMoto(),
);

export default router;