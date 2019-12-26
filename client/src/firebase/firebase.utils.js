import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
  const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
    console.log(docSnapshot.data());
    const { title, items } = docSnapshot.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
