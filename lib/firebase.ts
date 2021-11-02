import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCsGV1qjOFv6KKB5THKIF-CbMCX46mc0cg",
  authDomain: "dev-log-54e08.firebaseapp.com",
  projectId: "dev-log-54e08",
  storageBucket: "dev-log-54e08.appspot.com",
  messagingSenderId: "461323474636",
  appId: "1:461323474636:web:250df794ea368b78e95469",
  measurementId: "G-GPVEKYW7LZ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

/// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
