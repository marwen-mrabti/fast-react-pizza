import { createSlice } from "@reduxjs/toolkit";

type CartItem = {
  pizzaId: string | number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};
const initialState = {
  cart: [] as CartItem[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { pizzaId, name, unitPrice } = action.payload;

      const existingCartItem = state.cart.find((item) => item.pizzaId === pizzaId);
      if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.totalPrice = existingCartItem.quantity * unitPrice;
      } else {
        state.cart.push({
          pizzaId,
          name,
          quantity: 1,
          unitPrice,
          totalPrice: unitPrice,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const { pizzaId } = action.payload;
      const existingCartItem = state.cart.find((item) => item.pizzaId === pizzaId);
      if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.totalPrice =
          existingCartItem.quantity * existingCartItem.unitPrice;
      }
    },
    decreaseQuantity: (state, action) => {
      const { pizzaId } = action.payload;
      const existingCartItem = state.cart.find((item) => item.pizzaId === pizzaId);
      if (existingCartItem) {
        existingCartItem.quantity--;
        existingCartItem.totalPrice =
          existingCartItem.quantity * existingCartItem.unitPrice;
      }
    },
    removeFromCart: (state, action) => {
      const { pizzaId } = action.payload;
      const existingCartItem = state.cart.find((item) => item.pizzaId === pizzaId);
      if (existingCartItem) {
        state.cart = state.cart.filter((item) => item.pizzaId !== pizzaId);
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state: any) => {
  return state.cart.cart;
};

export const getTotalPrice = (state: any) => {
  const { cart } = state.cart;
  const totalPrice = cart.reduce(
    (acc: number, current: any) => (acc += current.totalPrice),
    0
  );
  return totalPrice;
};

export const getTotalQuantity = (state: any) => {
  const { cart } = state.cart;
  const totalQuantity = cart.reduce(
    (acc: number, current: any) => (acc += current.quantity),
    0
  );
  return totalQuantity;
};
