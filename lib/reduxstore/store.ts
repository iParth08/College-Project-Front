import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Adjust the import path as necessary

// for nextjs return configure store
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  });
};

// Infer the type of createStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
