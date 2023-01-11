import React from 'react'
import MoonLoader from 'react-spinners/MoonLoader'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledLoader = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-base
    text-black
  `}
`

const Loader = () => {
  return (
    <StyledLoader>
      <MoonLoader loading size={25} />
    </StyledLoader>
  )
}

export default Loader
