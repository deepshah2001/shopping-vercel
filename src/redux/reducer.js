import { createReducer } from "@reduxjs/toolkit";

const initialValue = {
  cartItems: [],
  subTotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
};

export const cartReducer = createReducer(initialValue, {
  addToCart: (state, action) => {
    const item = action.payload;
    const isItemExisted = state.cartItems.find((i) => i.id === item.id);
    if (isItemExisted) {
      state.cartItems.forEach((i) => {
        if (i.id === item.id) {
          i.quantity++;
        }
      });
    } else {
      state.cartItems.push(item);
    }
  },

  decrement: (state, action) => {
    const item = state.cartItems.find((i) => i.id === action.payload);
    if (item.quantity > 1) {
      state.cartItems.forEach((i) => {
        if (i.id === item.id) {
          i.quantity--;
        }
      });
    }
  },

  deleteFromCart: (state, action) => {
    state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
  },

  calculatePrice: (state) => {
    let sum = 0;
    state.cartItems.forEach((i) => (sum += (i.quantity * i.price)));
    state.subTotal = sum;
    state.shipping = sum > 500 ? 0 : 200;
    state.tax = +(sum * 0.18).toFixed();
    state.total = (state.subTotal + state.shipping + state.tax);
  }

});

