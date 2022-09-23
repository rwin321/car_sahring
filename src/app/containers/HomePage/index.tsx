import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { TopSection } from './topSection'
import NavBar from '../../components/navbar'
import BookCard from '../../components/bookCard'
import Spacer from '../../components/spacer'

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`

export const HomePage = () => {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Spacer direction="vertical" value="3em" />
      <BookCard />
    </PageContainer>
  )
}
