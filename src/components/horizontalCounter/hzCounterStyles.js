import styled from 'styled-components';

import { Text } from '../../styles/text';
import { Colors } from '../../styles/colors';

export const Counter = styled.div`
    height: 100px;

    text-align: center;

    display: grid;

    grid-template-rows: 1.25fr 1fr 1.25fr;

    grid-template-areas:
        "title"
        "interaction"
        "difference";
`;

export const Title = styled.h2`
    grid-area: title;

    //background-color: cyan;

    color: ${Colors.text.title};

    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.default};
    font-size: ${Text.size.medium};
`;

export const Difference = styled.p`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    grid-area: difference;

    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.default};
    font-size: ${Text.size.medium};

    color: ${Colors.text.default};

    //background-color: coral;

     //Small screens, laptops
    @media(max-width: 1024){

    }

    //Tablets
    @media(max-width: 768px){

    }

    //Mobile BreakPoint
    @media (max-width: 480px){
        display: none;
    }
`;

export const InteractionField = styled.div`
    display: flex;
    grid-area: interaction;
    //background-color: cornflowerblue;
`;