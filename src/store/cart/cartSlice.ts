import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProps, IAddItemToCartDataPayload } from "../../types/cartTypes";
import { ICoffeeType, ICoffeeTypeWithQuantity } from "../../types";

const getCartFromLocalStorage = (): ICoffeeTypeWithQuantity[] => {
  const localCart = localStorage.getItem("cart");
  let updatedCart: ICoffeeTypeWithQuantity[] = [];
  if (localCart) {
    return (updatedCart = JSON.parse(localCart));
  }
  return [];
};

const updateCartInLocalStorage = (updatedCart: ICoffeeTypeWithQuantity[]) => {
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

const initialState = {
  cartItems: [],
} as ICartProps;

const cartDataSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart: (state) => {
      let cart = localStorage.getItem("cart");
      if (cart) state.cartItems = JSON.parse(cart);
    },

    addItemToCart: (
      state,
      {
        payload: { coffee, quantityToAdd },
      }: PayloadAction<IAddItemToCartDataPayload>
    ) => {
      let updatedCart = getCartFromLocalStorage();

      const itemInCartIndex = updatedCart.findIndex(
        (cartItem) => cartItem.idProduto === coffee.idProduto
      );

      if (itemInCartIndex !== -1) {
        updatedCart[itemInCartIndex].quantidade += quantityToAdd;
        console.log("Product exists in the cart!");
      } else {
        const newItem: ICoffeeTypeWithQuantity = {
          ...coffee,
          quantidade: quantityToAdd,
        };
        updatedCart.push(newItem);
        console.log("Product does not exist in the cart!");
      }

      state.cartItems = updatedCart;
      updateCartInLocalStorage(updatedCart);

      console.log("Updated cart:", updatedCart);
    },

    removeItemFromCart: (
      state,
      { payload: coffee }: PayloadAction<ICoffeeType>
    ) => {
      const updatedCart = getCartFromLocalStorage().filter(
        (cartItem) => cartItem.idProduto !== coffee.idProduto
      );

      state.cartItems = updatedCart;
      updateCartInLocalStorage(updatedCart);

      console.log("Updated cart:", updatedCart);
    },

    removeSingleItemFromCart: (
      state,
      { payload: coffee }: PayloadAction<ICoffeeType>
    ) => {
      let updatedCart: ICoffeeTypeWithQuantity[] = getCartFromLocalStorage();

      const itemInCartIndex = updatedCart.findIndex(
        (cartItem) => cartItem.idProduto === coffee.idProduto
      );

      if (itemInCartIndex !== -1) {
        updatedCart[itemInCartIndex].quantidade -= 1;
        if (updatedCart[itemInCartIndex].quantidade < 1) {
          updatedCart = updatedCart.filter(
            (cartItem) => cartItem.idProduto !== coffee.idProduto
          );
        }
        console.log("Product exists in the cart!");
      }

      state.cartItems = updatedCart;
      updateCartInLocalStorage(updatedCart);

      console.log("Updated cart:", updatedCart);
    },
  },
});

export const cartReducer = cartDataSlice.reducer;
export const {
  loadCart,
  addItemToCart,
  removeItemFromCart,
  removeSingleItemFromCart,
} = cartDataSlice.actions;
