import dotenv from 'dotenv';
dotenv.config();

import * as functions from 'firebase-functions/v1';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { registerComponents } from './components';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

const COOKIE_SECRET = process.env.COOKIE_SECRET as string;

app.use(cors());
app.use(express.json());
app.use(cookieParser(COOKIE_SECRET));
app.use(express.urlencoded({ extended: true }));

registerComponents(app);

errorHandler(app);

module.exports.api = functions.region('asia-northeast1').https.onRequest(app);
