import React from 'react';

import { AppContainer, GlobalStyle } from './AppStyles.js';
import { MainPanel } from '../components/mainPanel/MainPanel'
import { startupLocalStorage, printAppStorage} from '../functions/localStorage';

function App() {

    startupLocalStorage();
    printAppStorage();

    return (
        <AppContainer>
            <GlobalStyle />
            <MainPanel></MainPanel>
        </AppContainer>
    )
}

export default App;
