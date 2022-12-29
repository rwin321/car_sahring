import styled from 'styled-components'
import tw from 'twin.macro'
import { TopSection } from './topSection'
import NavBar from 'app/components/navbar'
import BookCard from 'app/components/bookCard'
import Spacer from 'app/components/spacer'
import BookingSteps from './bookingSteps'
import AboutUs from './aboutUs'
import TopCars from './topCars'
import Footer from 'app/components/footer'

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
      <Spacer direction="vertical" value="7em" />
      <BookingSteps />
      <Spacer direction="vertical" value="5em" />
      <AboutUs />
      <Spacer direction="vertical" value="7em" />
      <TopCars />
      <Footer />
    </PageContainer>
  )
}
