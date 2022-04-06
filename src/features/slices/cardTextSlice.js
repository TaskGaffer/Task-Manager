import { createSlice } from '@reduxjs/toolkit';

const tasksList = createSlice({
  name:'tasksList',
  initialState: {
    tasks: [
      {
        _id: integer,
        header_id: integer,
        task: string,
        task_order: integer,
        progress: string,
      },
      {
        _id: 4,
        header_id: 2,
        task: "sleep",
        task_order: integer,
        progress: string,
      },
  ]
},
  reducer: {
    textUpdate:(state, action) => {
      state.text = action.payload;
    }
  }
  })

export const textUpdate = tasksList.actions;
export default tasksList.reducer;