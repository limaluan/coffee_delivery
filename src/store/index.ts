import { configureStore } from "@reduxjs/toolkit";

import { authReducer, productsSlice } from "./reducers";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { cartReducer } from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    [productsSlice.reducerPath]: productsSlice.reducer,
    auth: authReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
