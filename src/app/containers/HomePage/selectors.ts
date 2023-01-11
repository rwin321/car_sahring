import { RootState } from 'app/store'
import { createSelector } from '@reduxjs/toolkit'

const selectHomeSlice = (state: RootState) => state.home

export const selectTopCars = createSelector(selectHomeSlice, (home) => home.topCars)
