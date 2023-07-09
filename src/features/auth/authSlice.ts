import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../shared/services/api";
import { ILoginData, ITokenState } from "../../shared/types";

import Cookies from "js-cookie";

interface tokenResponse {
  data: string;
}

// ACTIONS
export const login = createAsyncThunk<string, ILoginData>(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const response: tokenResponse = await api.post("auth", data);
      console.log(response);
      return response.data;
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
        Cookies.set("token", action.payload);
        console.log(Cookies.get("token"));
      });
  },
});

export const authReducer = authSlice.reducer;
