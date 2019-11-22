import { createSelector } from "reselect";

const selectCart = state => {
    console.log('steuuuu', state.cart)
    return (state.cart)}

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((qty, cartItem) => {
      console.log("cartItem as in 1", cartItem);
      console.log("cartItem quant", cartItem.quantity);
      return qty + cartItem.quantity;
    }, 0)
);
