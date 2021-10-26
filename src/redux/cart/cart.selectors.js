import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity * cartItem.price, 0)
);
