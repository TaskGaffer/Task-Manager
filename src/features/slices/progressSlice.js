import { createSlice } from '@reduxjs/toolkit';

const progress = createSlice({
  name:'progress',
  initialState: {
    progress: "incomplete"
  },
  reducer: {
    progressChange:(state, action) => {
      state.progress = action.payload;
    }
  }
})

export const progressChange = progress.actions;
export default progress.reducer;