import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDYVHONj3QIui-wCHgMatpIiraB-x3TxY4",
    authDomain: "project-3-6eebe.firebaseapp.com",
    databaseURL: "https://project-3-6eebe.firebaseio.com",
    projectId: "project-3-6eebe",
    storageBucket: "project-3-6eebe.appspot.com",
    messagingSenderId: "469445939875",
    appId: "1:469445939875:web:f2600b33788ac63b272516",
    measurementId: "G-1PR8X3MD93"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log('userAuth',userAuth)
  console.log('additionalData', additionalData)
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;