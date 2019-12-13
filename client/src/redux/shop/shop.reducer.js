// import SHOP_DATA from "./shop.data2";
import ShopActionTypes from './shop.types'
const INITIIAL_STATE = {
  collections: null, //SHOP_DATA,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return{
        ...state,
        isFetching: true,
      }
      case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return{
        ...state,
        isFetching: false,
        collections: action.payload
      }
      case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return{
        ...state,
        isFetching: false,
        errorMessage: action.payload
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
