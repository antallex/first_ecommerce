import { createSelector } from 'reselect';

//input selector
// input selectors are just selectors that returns a piece of the state
// it is a function that usually takes ("select" + name) as a name
// it is a function that gets the whole state and just returns a slice of it, one layer deep usually

const selectCart = (state) => state.cart;

//output selector ??
// --- ' cart items ' is a propriety of our cart ----
//createSelector takes two arguments
//the first argument is a collection (an array) of input selectors
//the second argument is going to be a function that will return the value we want out of the selector

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//always use the smaller more specific selectors

//selectCartItemsCount gives us back the total quantity
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
  //.reduce is a native array method in javascript
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
