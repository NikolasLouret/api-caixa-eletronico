import { Response } from 'express';

/**
 * Handle an error.
 * @param res The response object.
 * @param statusCode The status code of the error.
 * @param message The error message.
 */
export const handleError = (res: Response, statusCode: number, message: string): void => {
    res.status(statusCode).json({ error: message });
};
