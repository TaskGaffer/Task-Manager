import { createSlice } from '@reduxjs/toolkit';

const tasksList = createSlice({
  name:'tasksList',
  initialState: {
    tasks: []
},
  reducer: {
    textUpdate:(state, action) => {
      state.text = action.payload;
    }
  }
  })

export const textUpdate = tasksList.actions;
export default tasksList.reducer;