import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../services/api";
import { ILoginDataPayload, ITokenAPIResponse, ITokenState } from "../../types";

// ACTIONS
export const login = createAsyncThunk<string, ILoginDataPayload>(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const { data: response } = await api.post<ITokenAPIResponse>("auth", data);
      return response.dados;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

// SLICE
const initialState = {
  loading: false,
  error: null,
  token: localStorage.getItem("token"),
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
        localStorage.setItem("token", action.payload);
      });
  },
});

export const authReducer = authSlice.reducer;
