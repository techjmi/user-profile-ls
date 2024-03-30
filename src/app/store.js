import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../features/userSlice'
import LoginReducer from '../features/loginSlice'

export const store = configureStore({
  reducer: {
    user:UserReducer,
    login:LoginReducer
  },
})