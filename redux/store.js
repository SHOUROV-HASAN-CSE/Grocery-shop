import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import cartSlice from './slices/cartSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
