import styled from 'styled-components';

import { Text } from '../../styles/text';
import { Colors } from '../../styles/colors';

export const Counter = styled.div`
    text-align: center;
`;

export const Title = styled.h2`
    color: ${Colors.text.title};

    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.default};
    font-size: ${Text.size.medium};
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