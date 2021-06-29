import styled from 'styled-components';

import { Text } from '../../styles/text';
import { Colors } from '../../styles/colors';

export const Panel = styled.div`
    height: 100%;
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
`;

export const Title = styled.h2`
    color: ${Colors.text.highContrast};
    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.medium};
    font-size: ${Text.size.default};
    text-align: center;
`;

export const ListContainer = styled.div`
    color: ${Colors.text.default};
    padding: 10px;
    list-style: circle inside;
    font-family: ${Text.family.heebo};
    font-size: ${Text.size.default};
    font-weight: ${Text.weight.default};
`;

export const OrderedList = styled.ol`
    margin-bottom: 15px;
`;

export const UnorderedList = styled.ul`
`;