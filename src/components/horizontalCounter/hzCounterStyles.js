import styled from 'styled-components';

import { Colors } from '../../styles/colors';

export const Counter = styled.div`
    text-align: center;
`;

export const Title = styled.h2`
    color: ${Colors.text.title};

    font-family: sans-serif;
    font-weight: normal;
    font-size: 18px;
`;

export const Difference = styled.p`
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
`;