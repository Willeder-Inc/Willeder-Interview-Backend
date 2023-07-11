import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../utils/apiErrorHandler';

export const errorHandler = (app: express.Application) => {
  app.use((req: Request, res: Response, next: NextFunction) => next());

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HttpException) {
      return res.status(Number(err.statusCode) || 500).json(err);
    }

    res.status(err.statusCode || 500).json(err);
  });
};
