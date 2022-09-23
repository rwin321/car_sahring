import React from 'react';
import LogoImage from '../../../assets/images/car-logo.png'
import styled from "styled-components";
import tw from "twin.macro";

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `}
`

const Image = styled.div`
  width: auto;

  ${tw`
    flex
    items-center
    h-6
    md:h-9
  `}
  img {
    width: auto;
    height: 100%;
  }
`

const Logo = () => {
  return (
    <LogoContainer>
      <Image>
        <img src={LogoImage}/>
        <LogoText>Yourcar.</LogoText>
      </Image>
    </LogoContainer>
  );
};

export default Logo;