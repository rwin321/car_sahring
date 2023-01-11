import { GetCars_cars } from 'app/services/carService/__generated__/GetCars'

export type TopCarsDTO = GetCars_cars[]
export interface IHomeSlice {
  topCars: TopCarsDTO
}
