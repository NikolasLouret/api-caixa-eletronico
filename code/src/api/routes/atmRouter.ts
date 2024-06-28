import { Router } from 'express';
import { handleWithdrawal } from '../controllers/atmController';

const atmRouter = Router();

atmRouter.post('/', handleWithdrawal);

export default atmRouter;