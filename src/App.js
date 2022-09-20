import React from 'react';
import styled from 'styled-components';
import MainPage from './Main';
import Header from './Header';

function App() {
  return (
    <AppContainer>
      <Header />
      <MainPage />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background-main);
  /* background: radial-gradient(ellipse at top left, var(--bibo-orange), transparent),
    radial-gradient(ellipse at top right, var(--bibo-green), var(--background-main)); */
`;
