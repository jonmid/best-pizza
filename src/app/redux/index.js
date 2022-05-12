import { configureStore } from '@reduxjs/toolkit'
import storeReducer from './store.slice'

// Create Redux store
export const store = configureStore({
  reducer: {
    storeReducer // Add store reducer
  }
})
