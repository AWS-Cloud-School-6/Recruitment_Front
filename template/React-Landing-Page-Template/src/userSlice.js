import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from "redux-persist";


const initialState = {
  name: "",
  id: "",
  isLogin: false,
};

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
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
