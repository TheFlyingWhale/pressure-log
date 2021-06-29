import React from 'react';

import { AppContainer, GlobalStyle } from './AppStyles.js';
import GlobalTextStyles from '../styles/text.js';
import { MainPanel } from '../components/mainPanel/MainPanel'
import { startupLocalStorage } from '../functions/localStorage';

function App() {

    startupLocalStorage();

    return (
        <AppContainer>
            <GlobalStyle />
            <GlobalTextStyles />
            <MainPanel></MainPanel>
        </AppContainer>
    )
}

export default App;
