import React from 'react';

import { AppContainer, GlobalStyle } from './AppStyles.js';
import { MainPanel } from '../components/mainPanel/MainPanel'
import { startupLocalStorage } from '../functions/localStorage';

function App() {

    startupLocalStorage();

    return (
        <AppContainer>
            <GlobalStyle />
            <MainPanel></MainPanel>
        </AppContainer>
    )
}

export default App;
