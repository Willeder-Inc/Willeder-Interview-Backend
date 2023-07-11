import { logger } from 'firebase-functions/v1';
import * as ERROR from '../constants/errorMessage';
import { ValidationError } from 'express-validator';

export class HttpException extends Error {
  statusCode?: number;
  message: string;
  errorMessage: string | string[];
  subStatusCode?: number;

  constructor(statusCode: number, messages: string | string[], subStatusCode: number) {
    super(messages[0]);
    this.statusCode = statusCode || 500;
    this.message = messages[0];
    this.errorMessage = messages;
    this.subStatusCode = subStatusCode;
  }
}

export const validationException = (errors: ValidationError[]) => {
  errors && logger.warn(errors);
  return new HttpException(
    400,
    errors[0].type === 'field' ? `${errors[0].msg}, Field Name: ${errors[0].path}` : errors[0].msg,
    1001,
  );
};

export const invalidException = (error: any) => {
  error ? logger.warn(error) : logger.warn(ERROR.DATANOTFOUND);
  return new HttpException(400, error || ERROR.DATANOTFOUND, 1001);
};

export const dataNotExistException = (error: any) => {
  error ? logger.warn(error) : logger.warn(ERROR.DATANOTFOUND);
  return new HttpException(400, error || ERROR.DATANOTFOUND, 1002);
};

export const userNotActivateException = (error: any) => {
  error ? logger.warn(error) : logger.warn(ERROR.USERNOTACTIVATE);
  return new HttpException(400, error || ERROR.USERNOTACTIVATE, 1003);
};

export const unauthorizedException = (error: any) => {
  error ? logger.warn(error) : logger.warn(ERROR.UNAUTH);
  return new HttpException(401, error || ERROR.UNAUTH, 2001);
};

export const dataConflictException = (error: any) => {
  error ? logger.warn(error) : logger.warn(ERROR.CONFLICT);
  return new HttpException(409, error || ERROR.CONFLICT, 3001);
};

export const badImplementationException = (error: any) => {
  error ? logger.error(error) : logger.error(ERROR.BADIMPLEMENTATION);
  return new HttpException(500, error || ERROR.BADIMPLEMENTATION, 5000);
};
