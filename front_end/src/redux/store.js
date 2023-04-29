import { configureStore } from '@reduxjs/toolkit'
import catogoriesSliceReducer from "./Updation"
export const store = configureStore({
  reducer: {
    catogories:catogoriesSliceReducer
  },
})