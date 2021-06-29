import React from 'react';

import { AppContainer, GlobalStyle, Title, AppItem } from './AppStyles.js';
import GlobalTextStyles from '../styles/text.js';
import { MainPanel } from '../components/mainPanel/MainPanel'
import { startupLocalStorage } from '../functions/localStorage';
import { HowToPanel } from '../components/howToPanel/howToPanel';
import { Footer } from '../components/footer/footer';

function App() {

    startupLocalStorage();

    return (
        <AppContainer>
            <AppItem>
                <Title>Pressure Log</Title>
                <GlobalStyle />
                <GlobalTextStyles />
                <MainPanel></MainPanel>
                <HowToPanel />
                <Footer />
            </AppItem>
        </AppContainer>
    )
}

export default App;
