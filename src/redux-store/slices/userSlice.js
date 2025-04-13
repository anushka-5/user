import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signUp, login, getUserProfile } from "../../api/userApi";

export const signUpUser = createAsyncThunk("user/signUp", async (userData) => {
  const response = await signUp(userData);
  return response;
});

export const loginUser = createAsyncThunk("user/login", async (credentials) => {
  const response = await login(credentials);
  return response;
});

export const fetchUserProfile = createAsyncThunk("user/fetchProfile", async (jwtToken) => {
  const response = await getUserProfile(jwtToken);
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token:localStorage.getItem("token")|| null,
    loading: false,
    error: null,
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.jwt;
        localStorage.setItem("token" , (action.payload.jwt));

      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.jwt;
        localStorage.setItem("token" , (action.payload.jwt));

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;