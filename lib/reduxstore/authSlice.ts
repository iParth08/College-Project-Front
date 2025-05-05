import { createSlice } from "@reduxjs/toolkit";
import { UserDataType } from "../types";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      //set data to local storage
      let userdata = JSON.stringify(action.payload);
      let isAuthenticated = JSON.stringify(true);
      localStorage.setItem("user", userdata);
      localStorage.setItem("isAuthenticated", isAuthenticated);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      //remove data from local storage
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectIsAuthenticated = (state: {
  auth: { isAuthenticated: boolean };
}) => state.auth.isAuthenticated;
export const selectUser = (state: { auth: { user: UserDataType | null } }) =>
  state.auth.user;

export default authSlice.reducer;
