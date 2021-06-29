import styled from 'styled-components';

import { Text } from './text';
import { Colors } from './colors';

export const Button = styled.button`
    width: 50px;
    height: 50px;

    border: none;
    border-radius: 10px;
`;

export const ButtonTitle = styled.p`
    color: ${Colors.text.lowContrast};

    font-family: ${Text.family.heebo};
    font-size: ${Text.size.small};
    font-weight: ${Text.weight.default};

    margin-bottom: 5px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const IconContainer = styled.div`
    width: 100%;
    height: 100%;

    padding: 10px;
`;

export const StyledIcon = styled.img`
    width: 100%;
    height: 100%;
`;