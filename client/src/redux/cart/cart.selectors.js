import { createSelector } from "reselect";

const selectCart = state => {
  return state.cart;
};

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((qty, cartItem) => {
      return qty + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((qty, cartItem) => qty + cartItem.quantity * cartItem.price, 0)
);
