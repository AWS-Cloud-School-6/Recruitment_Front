import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    id: "",
    isLogin: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.name = action.payload.username;
      state.id = action.payload.id;
      state.isLogin = true;
    },
    logoutUser: (state) => {
      state.name = "";
      state.id = "";
      state.isLogin = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
