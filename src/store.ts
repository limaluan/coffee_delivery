import { configureStore } from "@reduxjs/toolkit";

import { authReducer, productsReducer } from "./features";

export const store = configureStore({
  reducer: { auth: authReducer, products: productsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
