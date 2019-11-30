import React from "react";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCart } from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import {withRouter} from 'react-router-dom'

const CartDropdown = ({ cartItems, history, ...otherProps  }) => {
    console.log('fuuuuu',cartItems)
    console.log('other props ', otherProps)
  return (
    <div className='cart-dropdown'>
    <div className='cart-items'>
        {
          
          cartItems.length ? 
          cartItems.map(cartItem => {
          console.log("cartItem", cartItem);
          return (<CartItem key={cartItem.id} item={cartItem}/>);
        })
        : 
        <span className='empty-message'>Cart is empty</span>
        
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        otherProps.dispatch(toggleCart())
        }}>Checkout</CustomButton>
    </div>
  );
};


const mapStateToProps = createStructuredSelector( {
   cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
