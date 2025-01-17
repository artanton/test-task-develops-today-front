import { configureStore } from '@reduxjs/toolkit';


import { generalApi } from './sliceApi';


export const store = configureStore({
  reducer: {   
    [generalApi.reducerPath]: generalApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
     
    }).concat(generalApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});


