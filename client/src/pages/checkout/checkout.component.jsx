import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component.jsx'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
 import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import './checkout.styles.scss'
const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
            <div className='total'>TOTAL:  ${total}</div>
            <div className='test-warning'>
                *Use Test card for payment 4242 4242 4242 4242 4242 0120 123
            </div>
        <StripeCheckoutButton price={total}/>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);
