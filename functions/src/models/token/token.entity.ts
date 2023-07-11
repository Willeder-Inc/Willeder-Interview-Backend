import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot } from 'firebase-admin/firestore';

/**
 * Firestoreに保存するデータの型
 */
export type TokenDocument = {
  token_id: string;
  user_id: string;
  token_type: 'resetPassword';
  user_type: 'admin' | 'user';
  created_at: string;
  expired_at: string;
};

export type TokenDocumentWithId = WithSnapshotId<TokenDocument>;

export const TOKEN_COLLECTION_KEY = 'Token';

export const tokenConverter: FirestoreDataConverter<TokenDocumentWithId> = {
  toFirestore(doc): DocumentData {
    return {
      token_id: doc.token_id,
      user_id: doc.user_id,
      token_type: doc.token_type,
      user_type: doc.user_type,
      created_at: doc.created_at,
      expired_at: doc.expired_at,
    };
  },

  fromFirestore(snapshot: QueryDocumentSnapshot<TokenDocument>): TokenDocumentWithId {
    const data = snapshot.data();
    const entity: TokenDocumentWithId = {
      id: snapshot.id,
      token_id: data.token_id,
      user_id: data.user_id,
      token_type: data.token_type,
      user_type: data.user_type,
      created_at: data.created_at,
      expired_at: data.expired_at,
    };
    return entity;
  },
};
