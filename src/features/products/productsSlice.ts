import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../shared/services/api";
import { IProductsData, IProductsState } from "../../shared/types";

// ACTIONS
export const getProducts = createAsyncThunk("products/get", async () => {
  try {
    const response = await api.get("/produto/buscar");
    console.log(response);
    return response.data;
  } catch (e: any) {
    return console.log(e.message);
  }
});

// SLICE
const initialState = {
  loading: false,
  error: null,
  products: [],
} as IProductsState;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<IProductsData[]>) => {
          state.loading = false;
          state.products = action.payload;
        }
      );
  },
});

export const productsReducer = productsSlice.reducer;
