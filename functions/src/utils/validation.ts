import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { validationException } from './apiErrorHandler';
import { logger } from 'firebase-functions/v1';

export const checkValidation = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  logger.warn(errors);
  !errors.isEmpty() ? next(validationException(errors.array())) : next();
};
