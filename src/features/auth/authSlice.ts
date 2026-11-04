import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { AuthUser, LoginCredentials, LoginResponse } from "./auth.types";
import { loginRequest } from "./authApi";

type AuthState = {
  user: AuthUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk<
  LoginResponse,
  LoginCredentials,
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    return await loginRequest(credentials);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400 || error.response?.status === 401) {
        return rejectWithValue("Invalid username or password.");
      }

      if (!error.response) {
        return rejectWithValue(
          "Unable to reach the login service. Check your connection.",
        );
      }
    }

    return rejectWithValue("Unable to sign in. Please try again.");
  }
});
/* response >>>> 
{
  id: 1,
  username: "emilys",
  email: "...",
  firstName: "Emily",
  lastName: "Johnson",
  gender: "female",
  image: "...",
  accessToken: "...",
  refreshToken: "..."
} 
*/
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;

        const { accessToken, refreshToken, ...user } = action.payload;
        state.user = user;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload ??
          action.error.message ??
          "Unable to sign in. Please try again.";
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
