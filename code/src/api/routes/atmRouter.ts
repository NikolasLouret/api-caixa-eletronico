import { Router } from 'express';
import { withdrawal } from '../controllers/atmController';

const atmRouter = Router();

atmRouter.post('/', withdrawal);

export default atmRouter;