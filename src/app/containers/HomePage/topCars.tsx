import Car from 'app/components/car'
import styled from 'styled-components'
import tw from 'twin.macro'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { SCREENS } from 'app/components/responsive'
import carService from 'app/services/carService'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { setTopCars } from 'app/containers/HomePage/homeSlice'
import { TopCarsDTO } from 'app/containers/HomePage/types'
import { selectTopCars } from 'app/containers/HomePage/selectors'
import Loader from 'app/components/Loader'

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pr-0
    mb-10
  `}
`

const Title = styled.h2`
  ${tw`
  text-black
    text-3xl
    lg:text-5xl
    font-extrabold
  `}
`

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `}
`

const EmptyCarsState = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `}
`

const TopCars = () => {
  const [current, setCurrent] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const topCars = useAppSelector(selectTopCars)

  const handleSetCars = (cars: TopCarsDTO) => {
    dispatch(setTopCars(cars))
  }

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

  const fetchTopCars = async () => {
    try {
      setIsLoading(true)
      const cars = await carService.getCars()
      await handleSetCars(cars)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      throw err
    }
  }

  const onChange = (value: number) => {
    setCurrent(value)
  }

  const topCarsSlides = topCars?.map((car) => (
    <Car key={car.id} {...car} thumbnailSrc={car.thumbnailUrl} />
  ))

  useEffect(() => {
    fetchTopCars()
  }, [])

  if (!topCars) {
    return <div>Loading</div>
  }

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {isLoading && <Loader />}
      {!topCars?.length && <EmptyCarsState>No cars to show</EmptyCarsState>}
      {!!topCarsSlides?.length && (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={onChange}
            slides={topCarsSlides}
            plugins={[
              'clickToChange',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots
            value={current}
            onChange={onChange}
            number={isMobile ? topCars.length : Math.ceil(topCars.length / 3)}
          />
        </CarsContainer>
      )}
    </TopCarsContainer>
  )
}

export default TopCars
