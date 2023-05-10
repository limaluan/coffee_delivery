import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../shared/services/api";
import { ILoginData, ITokenState } from "../../shared/types";

import Cookies from "js-cookie";

// TOKEN SIMULADO ENQUANTO API ESTÁ FORA DO AR
Cookies.set("token", "tokenTest");

// ACTIONS
export const login = createAsyncThunk<string, ILoginData>(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response: Promise<string> = api.post("auth", data);
      return response;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

// SLICE
const initialState = {
  loading: false,
  error: null,
  token: Cookies.get("token"),
} as ITokenState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.token = action.payload;
        // Cookies.set("token", action.payload);
        // console.log(Cookies.get("token"));
      });
  },
});

export const authReducer = authSlice.reducer;
