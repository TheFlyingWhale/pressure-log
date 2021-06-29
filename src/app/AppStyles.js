import styled, {createGlobalStyle} from 'styled-components';
import { Colors } from '../styles/colors';
import { Text } from '../styles/text';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export const AppContainer = styled.div`
    height: 100%;

    //Small screens, laptops
    @media(max-width: 1024){
        
    }

    //Tablets
    @media(max-width: 768px){
        
    }

    //Mobile BreakPoint
    @media (max-width: 480px){
        
    }

    @media (min-height: 1165px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const AppItem = styled.div`
`;

export const Title = styled.h1`
    text-align: center;
    padding: 10px;

    color: ${Colors.text.default};

    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.bold};
    font-size: ${Text.size.hero};

    //Small screens, laptops
    @media(max-width: 1024){
        background-color: yellow;
    }

    //Tablets
    @media(max-width: 768px){
        //background-color: orange;
    }

    //Mobile BreakPoint
    @media (max-width: 480px){
        display: none;
    }
`;