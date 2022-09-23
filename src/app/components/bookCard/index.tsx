import React, { useState } from 'react'
import tw from 'twin.macro'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCalendar } from '@fortawesome/free-solid-svg-icons'
import Button from '../button'
import Spacer from '../spacer'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    py-1
    px-2
    md:py-2
    md:px-9
    select-none
  `}
`

const ItemContainer = styled.div`
  ${tw`flex relative`}
`

const Icon = styled.span<{ isActive?: boolean }>`
  ${tw`
    text-yellow-400
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
    cursor-pointer
  `}
  ${({ isActive }) =>
    css({
      color: isActive ? 'orange' : 'red',
    })}
`

const Name = styled.div`
  ${tw`
    text-gray-800
    text-xs
    md:text-sm
    cursor-pointer
  `}
`

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mx-2
    md:mx-5
  `}
`

const DatePicker = styled(Calendar)<{ offset?: boolean }>`
  position: absolute;
  top: 3.15em;
  left: -0.78em;
  max-width: none;
  box-shadow: 0 1.5px 12px -3px rgba(0, 0, 0, 0.5);
  user-select: none;
  background: rgba(232, 158, 33, 0.66);

  ${({ offset }) =>
    offset &&
    css`
      left: -7em;
    `}
`

const BookCard = () => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [isStartDate, setIsStartDate] = useState<boolean>(false)
  const [isEndDate, setIsEndDate] = useState<boolean>(false)

  const toggleStartDate = (isStart: boolean) => () => {
    if (!isStart) {
      if (isStartDate) {
        setIsStartDate(false)
      }
      return setIsEndDate((prev) => !prev)
    }
    setIsEndDate(false)
    return setIsStartDate((prev) => !prev)
  }

  const onChange = (isStart: boolean) => (d: Date) => {
    if (!isStart) {
      return setEndDate(d)
    }
    return setStartDate(d)
  }

  return (
    <CardContainer>
      <ItemContainer>
        <Icon isActive={isStartDate} onClick={toggleStartDate(true)}>
          <FontAwesomeIcon icon={isStartDate ? faCalendar : faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDate(true)}>Pick up date</Name>
        {isStartDate && <DatePicker onChange={onChange(true)} value={startDate} />}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon isActive={isEndDate} onClick={toggleStartDate(false)}>
          <FontAwesomeIcon icon={isEndDate ? faCalendar : faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDate(false)}>Return date</Name>
        {isEndDate && (
          <DatePicker offset minDate={startDate} onChange={onChange(false)} value={endDate} />
        )}
      </ItemContainer>
      <Spacer direction="horizontal" value="1em" />
      <Button text="Book a ride" theme="outlined" />
    </CardContainer>
  )
}

export default BookCard
