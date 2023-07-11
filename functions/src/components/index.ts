import { Application } from 'express';
import components from './components';

export const registerComponents = (app: Application) => {
  app.use('/', components);
};
