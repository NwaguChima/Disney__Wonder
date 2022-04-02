import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  name: string | null;
  email: string | null;
  photo: string | null;
}

interface IState {
  user: {
    name: string;
    email: string;
    photo: string;
  };
}

const initialState: IUser = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state: IState) => state.user.name;
export const selectUserEmail = (state: IState) => state.user.email;
export const selectUserPhoto = (state: IState) => state.user.photo;

export default userSlice.reducer;
