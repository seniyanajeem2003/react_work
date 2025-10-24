import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user")) || null;

const authSlice = createSlice({
  name: "auth",
  initialState: { user: savedUser },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    setUserFromLocalStorage: (state) => {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) state.user = userData;
    },
  },
});

export const { setUser, logout, setUserFromLocalStorage } = authSlice.actions;
export default authSlice.reducer;
