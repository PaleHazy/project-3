import ShopActionTypes from "./shop.types";
// import {
//   firestore,
//   convertCollectionsSnapshotToMap
// } from "../../firebase/firebase.utils";
export const fetchCollectionsStart = () => {
  console.log("oi ma g im in start in actions cuh");
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsSuccess = collectionsMap => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  };
};
export const fetchCollectionsFailure = error => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
  };
};

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    // const collectionRef = firestore.collection("collections");
    // dispatch(fetchCollectionsStart());
    // collectionRef
    //   .get()
    //   .then(snapshot => {
    //     console.log(snapshot);
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    //   })
    //   .catch(error => {
    //     return dispatch(fetchCollectionsFailure(error.message));
    //   });
  };
};
