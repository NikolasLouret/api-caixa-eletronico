import { Request, Response } from 'express';
import { calculateWithdrawal } from '../services/atmService';
import { handleError } from '../utils/errorHandler';
import { Withdrawal } from '../interfaces/atmInterface';

export const handleWithdrawal = (req: Request<Withdrawal>, res: Response<Withdrawal>): void => {
    const { valor } = req.body;

    if (!Number.isInteger(valor) || valor <= 0) {
        handleError(res, 400, 'Invalid input: value must be a positive integer.');
        return;
    }

    try {
        const result = calculateWithdrawal(valor);
        res.status(201).json(result);

    } catch (error: any) {
        handleError(res, 400, error.message);
    }
};
