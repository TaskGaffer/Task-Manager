import { createSlice } from '@reduxjs/toolkit';

const login = createSlice({
  name:'login',
  initialState: {
    loggedIn: false
  },
  reducer: {
    loginChange:(state) => {
      state.loggedIn = !state.loggedIn;
    }
  }
})

export const loginChange = login.actions;
export default login.reducer;