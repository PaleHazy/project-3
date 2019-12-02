//import SHOP_DATA from "./shop.data";
import ShopActionTypes from './shop.types'
const INITIIAL_STATE = {
  collections: null
};

const shopReducer = (state = INITIIAL_STATE, action) => {
  switch (action.type) {
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