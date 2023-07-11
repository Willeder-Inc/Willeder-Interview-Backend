import { db } from '../../utils/firebase';
import { TOKEN_COLLECTION_KEY, TokenDocument, tokenConverter } from './token.entity';

const COLLECTION_KEY = TOKEN_COLLECTION_KEY;
const converter = tokenConverter;

export const getToken = async (id: string) => {
  try {
    const docRef = db.collection(COLLECTION_KEY).doc(id).withConverter(converter);

    const docSnap = await docRef.get();
    return docSnap.data();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const addToken = async (token: TokenDocument) => {
  try {
    const docRef = db.collection(COLLECTION_KEY).doc(token.token_id).withConverter(converter);
    await docRef.set(token, { merge: true });
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteToken = async (id: string) => {
  try {
    const docRef = db.collection(COLLECTION_KEY).doc(id).withConverter(converter);
    await docRef.delete();
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};
