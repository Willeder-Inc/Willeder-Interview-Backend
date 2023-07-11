import { Request, Response, NextFunction } from 'express';
import { unauthorizedException } from './apiErrorHandler';
import { logger } from 'firebase-functions/v1';

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearer = req.headers['authorization'];
    if (!bearer) throw unauthorizedException('No token provided');

    // TODO

    req.user = { user_id: undefined, name: '' };
    next();
  } catch (err) {
    logger.warn(err);
    next(err);
  }
};
