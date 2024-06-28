import { Router } from 'express';
import atmRouter from './atmRouter';

const router = Router();

router.use('/saque', atmRouter);

export default router;
