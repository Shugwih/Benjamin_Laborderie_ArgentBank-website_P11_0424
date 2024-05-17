import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';
import userReducer from './Slices/userSlice';

const preloadedState = {
  auth: {
      token: localStorage.getItem('token'),
      isLoggedIn: !!localStorage.getItem('token')
  }
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
  preloadedState
});
