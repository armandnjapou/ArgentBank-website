import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../service/auth.service";
import { setMessage } from "../message/message";

const token = JSON.parse(localStorage.getItem('token'));

export const signup = createAsyncThunk(
    'auth/signup',
    async (userInfo, thunkAPI) => {
        try {
            const response = await authService.signup(userInfo);
            thunkAPI.dispatch(setMessage(response.data.message));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) || error.message || error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async ({ email, password }, thunkAPI) => {
      try {
        const data = await authService.signin(email, password);
        return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const signout = createAsyncThunk("auth/signout", async () => {
  await authService.signout();
});

const initialState = token
  ? { isLoggedIn: true, token }
    : { isLoggedIn: false, token: null };
  
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signup.fulfilled]: (state) => {
            state.isLoggedIn = false;
        },
        [signup.rejected]: (state) => {
            state.isLoggedIn = false;
        },
        [signin.fulfilled]: (state, action) => {
          state.isLoggedIn = true;
          state.token = action.payload.token;
        },
        [signin.rejected]: (state) => {
            state.isLoggedIn = false;
            state.token = null;
        },
        [signout.fulfilled]: (state) => {
            state.isLoggedIn = false;
            state.token = null;
        },
    },
});

export default authSlice.reducer;