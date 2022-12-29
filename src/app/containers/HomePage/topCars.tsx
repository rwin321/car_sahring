import Car from 'app/components/car'
import styled from 'styled-components'
import tw from 'twin.macro'
import { ICar } from 'typings/car'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { SCREENS } from 'app/components/responsive'

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
const Mock: ICar = {
  thumbnailSrc: 'https://www.freepnglogos.com/uploads/bmw-png/bmw-series-executive-taxis-25.png',
  name: 'BMW',
  gearType: 'Auto',
  gas: 'Petrol',
  monthlyPrice: 1600,
  dailyPrice: 70,
  mileage: '10k',
}

const Mock2: ICar = {
  thumbnailSrc: 'https://www.freepnglogos.com/uploads/bmw-png/bmw-series-executive-taxis-25.png',
  name: 'BMW 2',
  gearType: 'Mech',
  gas: 'Petrol',
  monthlyPrice: 1450,
  dailyPrice: 55,
  mileage: '20k',
}

const TopCars = () => {
  const [current, setCurrent] = useState<number>(0)

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

  const mockedCars = [
    <Car {...Mock} />,
    <Car {...Mock2} />,
    <Car {...Mock} />,
    <Car {...Mock2} />,
    <Car {...Mock} />,
  ]
  const onChange = (value: number) => {
    setCurrent(value)
  }

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={onChange}
          slides={mockedCars}
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
          number={isMobile ? mockedCars.length : Math.ceil(mockedCars.length / 3)}
        />
      </CarsContainer>
    </TopCarsContainer>
  )
}

export default TopCars
