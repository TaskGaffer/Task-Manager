import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slices/loginSlice.js'
import progressReducer from './slices/progressSlice.js'
import cardTextReducer from './slices/cardTextSlice.js'


const store =  configureStore({
  reducer: {
    user: loginReducer,
    progress: progressReducer, 
    text: cardTextReducer,
  },
})

export default store;