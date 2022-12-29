import React from 'react'
import { ICar } from 'typings/car'
import styled from 'styled-components'
import tw from 'twin.macro'
import Button from 'app/components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faFillDrip, faTachometer } from '@fortawesome/free-solid-svg-icons'

interface ICarProps extends ICar {
  mileage: string
}

const CarContainer = styled.div`
  width: 16.5em;
  min-height: 24em;
  max-height: 24em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  `}
`

const CarThumbnail = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`

const CarName = styled.div`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
  `}
`

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    items-center
    mt-3
  `}
`

const SmallText = styled.p`
  color: inherit;
  ${tw`
    inline-flex
    text-xs
    font-thin
  `}
`

const DailyPrice = styled.div`
  ${tw`
    text-red-500
    font-bold
    text-sm
    m-3
  `}
`

const MonthlyPrice = styled.div`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `}
`

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `}
`

const CarDetailsContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-between
  `}
`

const CarDetailContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`

const CarInfo = styled.div`
  ${tw`
    text-gray-400
    text-xs
  `}
`

const Separator = styled.div`
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `}
`

const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
    mb-3
  `}
`

const Car = (props: ICarProps) => {
  const { name, thumbnailSrc, dailyPrice, monthlyPrice, mileage, gearType, gas } = props

  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <Separator />
      <PricesContainer>
        <DailyPrice>
          ${dailyPrice} <SmallText>/Day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          ${monthlyPrice} <SmallText>/Month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <CarDetailsContainer>
        <CarDetailContainer>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometer} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetailContainer>
        <CarDetailContainer>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsis} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetailContainer>
        <CarDetailContainer>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetailContainer>
      </CarDetailsContainer>
      <RentButton text="Rent now" theme="filled" />
    </CarContainer>
  )
}

export default Car
