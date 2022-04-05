import { createSlice } from '@reduxjs/toolkit';

const position = createSlice({
  name:'position',
  initialState: {
    
  },
  reducer: {
    positionChange:(state, action) => {
      state.position = action.payload;
    }
  }
})

export const positionChange = position.actions;
export default position.reducer;