import CartActionTypes from './cart.types'

export const toggleCart = () => {

    return {
        type: CartActionTypes.TOGGLE_CART
    }
}