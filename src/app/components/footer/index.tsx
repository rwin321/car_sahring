import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Logo, { ColorEnum } from 'app/components/logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const FooterContainer = styled.div`
  background-color: rgb(23 38 87);

  ${tw`
    relative
    flex
    flex-col
    min-w-full
    pt-4
    md:pt-12
    pb-1
    items-center
    justify-center
  `}
`

const InnerContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-evenly
    w-full
    h-full
    max-w-screen-2xl
  `}
`

const AboutContainer = styled.div`
  ${tw`
    flex 
    flex-col 
    mr-2 
    md:mr-16
    pl-10
    2xl:pl-0
  `}
`

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-thin
    text-sm
    max-w-xs
    leading-5
    mt-2
  `}
`

const SectionContainer = styled.section`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    flex-wrap
    items-start
    mr-3
    md:mr-16
    mt-2
    md:mt-0
    pl-10
    2xl:pl-0
  `}
`

const LinkList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`
const ListItem = styled.li`
  ${tw`
    mb-3
  `}

  & > a {
    ${tw`text-sm text-white hover:text-gray-200 transition-all`}
  }
`

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `}
`

const RedIcon = styled.span`
  ${tw`
    w-8
    h-8
    rounded-full
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
    bg-red-500
    p-2
  `}
`

const HorizontalContainer = styled.div`
  ${tw`flex items-center`}
`

const SmallText = styled.h6`
  ${tw`text-sm text-white`}
`

const BottomContainer = styled.div`
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-start
    mt-7
    md:mt-1
    pl-10
    2xl:pl-0
  `}
`

const CopyrightText = styled.div`
  font-size: 12px;
  ${tw`
    text-gray-300
  `}
`

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo textColor={ColorEnum.WHITE} />
          <AboutText>
            Smartcar is a Car renting company where you can easily book a car without any problems.
            We are growing fast. Our cars are all over the United States and Canada. <br />
            Feel free to contact our Support if you have any questions or/and suggestuins
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our links</HeaderTitle>
          <LinkList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinkList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Contact</HeaderTitle>
          <LinkList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinkList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+1 321-444-2323</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@smartcar.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Smartcar ALl rights reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  )
}

export default Footer
