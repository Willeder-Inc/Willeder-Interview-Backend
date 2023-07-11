import express from 'express';

import authComponent from './auth';
import accountComponent from './account';
import { isAuth } from '../../utils/auth';

const router = express.Router();

router.use('/auth', authComponent);
router.use('/account', isAuth, accountComponent);

export default router;
