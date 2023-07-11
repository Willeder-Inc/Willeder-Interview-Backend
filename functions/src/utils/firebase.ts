import { firestore } from 'firebase-admin';
import admin from 'firebase-admin';

import devConfig from './serviceAccounts/firebase-dev';
import prodConfig from './serviceAccounts/firebase-prod';

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

admin.initializeApp({
  credential: admin.credential.cert(config),
});

const db = firestore();
const adminauth = admin.auth();

export { db, adminauth };
