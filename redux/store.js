import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import cartSlice from './slices/cartSlice';
import wishListSlice from './slices/wishListSlice';
import localStorageMiddleware from './middlewares/localStorage';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartSlice,
    wishlist: wishListSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, localStorageMiddleware),
});

export default store;
