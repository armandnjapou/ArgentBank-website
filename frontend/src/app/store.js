import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import messageReducer from '../features/message/message';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer
  },
  devTools: true
});
