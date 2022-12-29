import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from 'app/components/responsive'
import JeepPng from 'assets/images/jeep.png'

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    2xl: justify-center
    pt-4
    pb-4
    pr-7   
    pl-7   
    md:pl-0
    md:pr-0
    bg-white
 `}
`

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -180px;

  img {
    width: auto;
    height: 100%;

    @media (min-width: ${SCREENS.md}) {
      height: 28em;
    }

    @media (min-width: ${SCREENS.lg}) {
      height: 30em;
    }

    @media (min-width: ${SCREENS['2xl']}) {
      height: 35em;
      margin-left: 0;
    }
  }
`

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
`

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `}
`

const InfoText = styled.p`
  ${tw`
    max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `}
`

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepPng} />
      </CarContainer>
      <InfoContainer>
        <Title>Fell the BEst Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae blanditiis
          consequatur corporis cum delectus dicta doloremque eius eligendi est expedita, fugit ipsam
          iure iusto minima molestias natus nulla quae quam, quasi ratione rem tenetur, voluptas.
          Aliquid placeat reprehenderit sit sunt temporibus! At dolore ea earum incidunt, libero non
          temporibus? Aliquam aperiam blanditiis corporis, deleniti deserunt doloribus eligendi enim
          esse est eum expedita explicabo fugit illum incidunt ipsa ipsam iusto laboriosam magni
          molestiae nesciunt nulla numquam odio officiis provident quia quod rem sed sint ullam
          velit veniam vero voluptate voluptatibus? Ducimus, ipsam soluta? Fuga fugiat ipsam laborum
          necessitatibus obcaecati sequi.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  )
}

export default AboutUs
