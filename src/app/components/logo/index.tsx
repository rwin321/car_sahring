import React from 'react'
import LogoImage from 'assets/images/car-logo.png'
import styled from 'styled-components'
import tw from 'twin.macro'

export enum ColorEnum {
  WHITE = 'WHITE',
  DARK = 'DARK',
}

interface ILogoProps {
  textColor?: ColorEnum
  bgColor?: ColorEnum
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`

const LogoText = styled.div<{ textColor?: ColorEnum }>`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `}
  ${({ textColor }: { textColor?: ColorEnum }) =>
    textColor && textColor === ColorEnum.WHITE && tw`text-white`}
`

const Image = styled.div<{ bgColor?: ColorEnum }>`
  width: auto;

  ${tw`
    flex
    items-center
    h-6
    md:h-9
  `}

  img {
    ${({ bgColor }) => bgColor && bgColor === ColorEnum.DARK && tw`bg-black`}
    width: auto;
    height: 100%;
  }
`

const Logo = (props: ILogoProps) => {
  const { textColor, bgColor } = props

  return (
    <LogoContainer>
      <Image bgColor={bgColor}>
        <img src={LogoImage} />
        <LogoText textColor={textColor}>Smartcar</LogoText>
      </Image>
    </LogoContainer>
  )
}

export default Logo
