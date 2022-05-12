import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { ValidateLocalStorage, SaveUserStoreLocalStorage, ClearLocalStorage } from '../common/localstorage/localstorage.service'
import { StoreApi } from './../common/api/store.api'

// Initial localstorage
const localStorageInitial = ValidateLocalStorage()

// Initial funtion to get stores
export const fetchAsyncStores = createAsyncThunk('stores/fetchAsyncStores', async (data, { rejectWithValue }) => {
  const { user: name, password } = data

  try {
    const response = await StoreApi.get()

    if (response.status === 200) {
      const findUser = response.data.response.users.find(item => item.email === name && item.password === password)

      if (findUser !== undefined) {
        return { user: findUser, stores: response.data.response.stores }
      } else {
        return rejectWithValue('Usuario o contraseña incorrectos')
      }
    }
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

// Initial state for Redux store
const initialState = {
  isAuthenticated: Object.keys(localStorageInitial.user).length !== 0,
  user: localStorageInitial.user,
  stores: localStorageInitial.stores,
  isLoading: false,
  error: null,
  bookmarks: localStorageInitial.bookmarks
}

// Create Redux state slice
const storeSlice = createSlice({
  name: 'stores',
  initialState, // Define initial state
  reducers: {
    // Define reducers
    addBookmark: (state, action) => {
      if (!state.bookmarks.find(bookmark => bookmark.id === action.payload.id)) {
        state.bookmarks = [...state.bookmarks, action.payload]

        // const stringifiedStore = JSON.stringify(state.bookmarks)
        // localStorage.setItem(NAME_LOCALSTORAGE, stringifiedStore)
      }
    },
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(item => item.id !== action.payload)

      // const stringifiedStore = JSON.stringify(state.bookmarks)
      // localStorage.setItem(NAME_LOCALSTORAGE, stringifiedStore)
    },
    changeAuthenticated: (state, action) => {
      state.isAuthenticated = !state.isAuthenticated
    },
    logout: (state, action) => {
      state.isAuthenticated = false
      state.user = {}
      state.stores = []
      state.bookmarks = []
      ClearLocalStorage()
    }
  },
  extraReducers: {
    [fetchAsyncStores.pending]: state => {
      // console.log('Pending')
      return { ...state, isLoading: true, error: null }
    },
    [fetchAsyncStores.fulfilled]: (state, { payload }) => {
      // console.log('Fetched Successfully!')
      SaveUserStoreLocalStorage(JSON.stringify(payload.user), JSON.stringify(payload.stores))
      return { ...state, isAuthenticated: true, user: payload.user, stores: payload.stores, isLoading: false, error: null }
    },
    [fetchAsyncStores.rejected]: (state, { payload }) => {
      // console.log('Rejected!')
      return { ...state, isLoading: false, error: payload }
    }
  }
})

// Export actions generated by "createSlice()":
export const { addBookmark, removeBookmark, changeAuthenticated, logout } = storeSlice.actions

// Export reducer generated by "createSlice()":
export default storeSlice.reducer
