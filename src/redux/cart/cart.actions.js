import CartActionTypes from './cart.types'

export const toggleCart = () => {

    return {
        type: CartActionTypes.TOGGLE_CART
    }
}

export const addItem = item => {

    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
}