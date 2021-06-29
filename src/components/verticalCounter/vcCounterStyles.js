import styled from 'styled-components';

import { Colors } from '../../styles/colors';
import { Text } from '../../styles/text';

const leftOrientationGridArea=`"empty title" "difference interaction"`;
const leftOrientalGridTemplate='0.15fr 1fr';

const rightOrientationGridArea=`"title empty" "interaction difference"`;
const rightOrientationGridTemplate='1fr 0.15fr';

export const Counter = styled.div`
    width: 125px;

    text-align: center;

    display: grid;

    grid-template-columns: ${props => props.counterSide === 'left' ? leftOrientalGridTemplate : rightOrientationGridTemplate};
    grid-template-rows: 0.15fr 1fr;

    grid-template-areas: ${props => props.counterSide === 'left' ? leftOrientationGridArea : rightOrientationGridArea};

    @media (max-width: 480px){
        grid-template-columns: ${props => props.counterSide === 'left' ? '0fr 1fr' :  '1fr 0fr'};//0fr 1fr ;
        grid-template-rows: 0fr 1fr;
    }
`;

export const Title = styled.h2`
    grid-area: title;

    color: ${Colors.text.title};

    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.default};
    font-size: ${Text.size.medium};
`;

export const Difference = styled.p`
    width: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    grid-area: difference;

    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.default};
    font-size: ${Text.size.medium};

    color: ${Colors.text.default};

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
    grid-area: interaction;
`;