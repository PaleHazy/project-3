import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux'
import {toggleCart} from '../../redux/cart/cart.actions'
const CartIcon = ({toggleCart}) => {

    return (
        <div className='cart-icon' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{

    return {
        toggleCart: () => dispatch(toggleCart())
    }
}
export default connect(null,mapDispatchToProps)(CartIcon);