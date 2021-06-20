import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export const AppContainer = styled.div`
    //Small screens, laptops
    @media(max-width: 1024){
        
    }

    //Tablets
    @media(max-width: 768px){
        
    }

    //Mobile BreakPoint
    @media (max-width: 480px){
        
    }
`;