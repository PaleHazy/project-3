import React from "react";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";
const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(toggleCart())
  };
};

const mapStateToProps = (state) => {
  console.log("statexx", state);
  return {
    itemCount: selectCartItemsCount(state)  
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
