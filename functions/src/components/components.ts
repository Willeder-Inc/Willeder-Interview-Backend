import express from 'express';

import apiComponent from './api';

const router = express.Router();

router.use('/', apiComponent);

export default router;
