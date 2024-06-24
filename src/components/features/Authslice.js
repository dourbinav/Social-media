import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserLogin, UserRegister } from "./Api";

const initialState = {
  status: "idle",
  user: null,
  error: null,
};

export const UserLoginAction = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await UserLogin(userData);
      return response.data; // Assuming response.data contains relevant data from API
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data)
        return rejectWithValue(error.response.data);
      } else {
        // Something happened in setting up the request that triggered an Error
        return rejectWithValue(error.message);
      }
    }
  }
);

export const UserRegisterAction = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await UserRegister(userData);
      return response.data; 
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetStatus(state) {
      state.status = "idle";
      state.error = null;
    },
    logout(state) {
      state.user = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserLoginAction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UserLoginAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(UserLoginAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload || "Login failed";
      })
      .addCase(UserRegisterAction.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UserRegisterAction.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(UserRegisterAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload || "Registration failed";
      });
  },
});

export const { resetStatus, logout } = authSlice.actions;

export default authSlice.reducer;
