import { createSlice } from '@reduxjs/toolkit'
import { IHomeSlice } from 'app/containers/HomePage/types'

const initialState: IHomeSlice = {
  topCars: [],
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topCars = action.payload
    },
  },
})

export const { setTopCars } = homeSlice.actions

export default homeSlice.reducer
