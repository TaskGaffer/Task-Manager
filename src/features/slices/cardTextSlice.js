import { createSlice } from '@reduxjs/toolkit';

const tasksList = createSlice({
  name:'tasksList',
  initialState: {
    tasks: [
      {
        heading: 'science',
        header_id: 1,
        tasks: [
          {
            _id: 1,
            task: 'study',
            task_order: 0,
            progress: 'incomplete'
          },
          {
            _id: 2,
            task: 'sleep',
            task_order: 1,
            progress: 'incomplete'
          },
          {
            _id: 3,
            task: 'yup',
            task_order: 2,
            progress: 'incomplete'
          },
          {
            _id: 4,
            task: 'nop',
            task_order: 3,
            progress: 'incomplete'
          }
        ]
      },
      {
        heading: 'rave',
        header_id: 2,
        tasks: [
          {
            _id: 1,
            task: 'eat',
            task_order: 1,
            progress: 'incomplete'
          },
          {
            _id: 2,
            task: 'repeat',
            task_order: 0,
            progress: 'incomplete'
          }
        ]
      }
    ]
},
  reducers: {
    textUpdate:(state, action) => {
      state.tasks = action.payload;
    }
  }
  })

export const textUpdate = tasksList.actions;
export default tasksList.reducer;
