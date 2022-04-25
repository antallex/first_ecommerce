// utility functions allow us to keep our files
// clean and organize functions that we may
// need in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
  //cartItems.find() will return the first item found in our array
  //based of a condition that we pass inside .find()
  //if condition matches will set existingCartItems to True if not it will be undefined

  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //if the card item is not found inside the array
  //then we return a new array with all existing cart items (...cart)
  //but also add in an object {...cartItemsToAdd} and we will give
  //a base quantity of 1

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

  //quantity propriety gets attached the first time around since this if block
  //won't run when it's a new item
};

export const removeItemFromCart = (cartItems, cartItemsToRemove) => {

  const existingcartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToRemove.id
  );

  if (existingcartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemsToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemsToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
