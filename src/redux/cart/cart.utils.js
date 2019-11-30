export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
    console.log('existt',existingCartItem)
  if (existingCartItem) {
      console.log('insidee bissssshhh')
    return cartItems.map(cartItem =>
     {
         console.log('cartItem.id', cartItem.id)
         console.log('toadd', cartItemToAdd)

        return (cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem)}
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
const existingCartItem = cartItems.find(
  cartItem => cartItem.id === cartItemToRemove.id
)

if(existingCartItem.quantity === 1){
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}
return cartItems.map(
  cartItem => 
  cartItem.id === cartItemToRemove.id 
  ? {...cartItem, quantity: cartItem.quantity - 1}
  : cartItem
)
}