import { createSlice } from '@reduxjs/toolkit';

const inputInitalState = {
  inputHeader: '',
  error: false,
};

const inputReducer = createSlice({
  name: 'input',
  initialState: inputInitalState,
  reducers: {
    setInput(state, action) {
      console.log('in setInput');
      state.inputHeader = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const inputAction = inputReducer.actions;
export default inputReducer.reducer;
