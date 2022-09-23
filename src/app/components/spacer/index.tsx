import React from 'react'
import styled, { css } from 'styled-components'

const SpacerContainer = styled.div<{
  direction: 'horizontal' | 'vertical'
  value: string | number
}>`
  ${({ direction, value }) =>
    direction &&
    value &&
    css({
      margin: direction === 'horizontal' ? `0 ${value}` : `${value} 0`,
    })}
`

const Spacer = ({
  direction,
  value,
}: {
  direction: 'horizontal' | 'vertical'
  value: string | number
}) => {
  return <SpacerContainer direction={direction} value={value} />
}

export default Spacer
