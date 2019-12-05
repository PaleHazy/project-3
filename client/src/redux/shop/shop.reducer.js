// import SHOP_DATA from "./shop.data2";
import ShopActionTypes from './shop.types'
const INITIIAL_STATE = {
  collections: null, //SHOP_DATA,
  isFetching: false
};

const shopReducer = (state = INITIIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return{
        isFetching: true,
        ...state
      }
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return{
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;
