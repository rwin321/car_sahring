import React from 'react'
import { IButtonProps } from './types'
import styled from 'styled-components'
import tw from 'twin.macro'

const BaseButton = styled.div`
  ${tw`
    px-5
    py-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-bold
    border-transparent
    border
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
    cursor-pointer
  `}
`

const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-yellow-500
    hover:bg-transparent
    hover:text-yellow-500
    hover:border-yellow-500
  `}
`

const FilledButton = styled(BaseButton)`
  ${tw`
    border-yellow-500
    text-yellow-500
    bg-transparent
    hover:bg-yellow-500
    hover:text-white
    hover:border-transparent
  `}
`

const Button = (props: IButtonProps) => {
  const { theme, text = '' } = props

  if (theme === 'outlined') {
    return <OutlinedButton>{text}</OutlinedButton>
  } else if (theme === 'filled') {
    return <FilledButton>{text}</FilledButton>
  } else {
    return <BaseButton>{text}</BaseButton>
  }
}

export default Button
