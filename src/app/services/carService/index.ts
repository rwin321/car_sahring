import { GetCars_cars } from 'app/services/carService/__generated__/GetCars'
import { apolloClient } from 'app/graphql'
import { GET_ALL_CARS } from 'app/services/carService/queries'
import { TopCarsDTO } from 'app/containers/HomePage/types'

class CarServices {
  public async getCars(): Promise<TopCarsDTO> {
    try {
      const res = await apolloClient.query({ query: GET_ALL_CARS })

      if (res?.data?.cars) {
        return res.data.cars as GetCars_cars[]
      }

      return []
    } catch (err) {
      throw err
    }
  }
}

export default new CarServices()
