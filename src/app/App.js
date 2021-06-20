import React from 'react';

import { AppContainer, GlobalStyle } from './AppStyles.js';
import { MainPanel } from '../components/mainPanel/MainPanel'

function App() {
  return (
      <AppContainer>
          <GlobalStyle />
          <MainPanel></MainPanel>
      </AppContainer>
  )
}

export default App;
