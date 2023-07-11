import express from 'express';
import { checkSchema } from 'express-validator';

import {
  FORGOT_PASSWORD_SCHEMA,
  LOGIN_SCHEMA,
  REFRESH_TOKEN_SCHEMA,
  REGISTER_SCHEMA,
  UPDATE_PASSWORD_SCHEMA,
} from './auth.validation';

import * as controller from './auth.controller';
import { checkValidation } from '../../../utils/validation';
import { isAuth } from '../../../utils/auth';

const router = express.Router();

router.post('/register', checkSchema(REGISTER_SCHEMA), checkValidation, controller.register);
router.put('/login', checkSchema(LOGIN_SCHEMA), checkValidation, controller.login);
router.put('/logout', isAuth, controller.logout);
router.put('/password/forgot', checkSchema(FORGOT_PASSWORD_SCHEMA), checkValidation, controller.forgotPassword);
router.put('/password/reset', checkSchema(UPDATE_PASSWORD_SCHEMA), checkValidation, controller.updatePassword);
router.post('/refresh', checkSchema(REFRESH_TOKEN_SCHEMA), checkValidation, controller.refresh);

export default router;
