import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import homeSlice from 'app/containers/HomePage/homeSlice'
import reduxLogger from 'redux-logger'

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    home: homeSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
