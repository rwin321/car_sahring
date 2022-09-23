import React from 'react';
import './App.css';
import styled from "styled-components";
import tw from "twin.macro";
import {HomePage} from "./app/containers/HomePage";
import NavBar from "./app/components/navbar";


const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    items-center
  `}
`;

const App = () => {
  return (
    <AppContainer>
      <NavBar />
      <HomePage/>
    </AppContainer>
  );
}

export default App;
