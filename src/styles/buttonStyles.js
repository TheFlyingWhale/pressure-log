import styled from 'styled-components';
import { Colors } from './colors';

export const Button = styled.button`
    width: 50px;
    height: 50px;

    border: none;
    border-radius: 10px;

    font-size: 18px;
    font-weight: 500;
`;

export const ButtonTitle = styled.p`
    color: ${Colors.text.lowContrast};

    font-size: 12px;
    font-family: sans-serif;

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