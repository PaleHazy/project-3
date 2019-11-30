import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_ZEEvkz1YjGnKmzgF14QtJCDa00FGisv8r9";
  const onToken = token => {
    console.log(token);
    alert('payment Success')
  };
  return (
    <StripeCheckout
      name='Bazaar Online'
      label='Pay Now'
      billingAddress
      shippingAddress
      amount={priceForStripe}
      stripeKey={publishableKey}
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      panelLabel='Pay Now'
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
