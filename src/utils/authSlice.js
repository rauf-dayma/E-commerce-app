import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null, // Default to null when user is not logged in
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.userId = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
