import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = "pk_test_51JocONHMlkqvUWtZY5bpjHz44y4An6sLGg4INC3aClmhlaAklNnFNXeiSdciVIaXfrWxT7sv05q3n3LO7bm2SAAz00mBZ7indZ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      amount={stripePrice}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
