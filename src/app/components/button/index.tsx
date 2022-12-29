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

const FilledButton = styled(BaseButton)`
  ${tw`
    bg-yellow-500
    hover:bg-transparent
    hover:text-yellow-500
    hover:border-yellow-500
  `}
`

const OutlinedButton = styled(BaseButton)`
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
  const { theme, className, text = '' } = props

  if (theme === 'outlined') {
    return <OutlinedButton className={className}>{text}</OutlinedButton>
  } else if (theme === 'filled') {
    return <FilledButton className={className}>{text}</FilledButton>
  } else {
    return <BaseButton className={className}>{text}</BaseButton>
  }
}

export default Button
