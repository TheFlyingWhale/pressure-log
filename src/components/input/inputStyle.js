import styled from 'styled-components';

import { Colors } from '../../styles/colors';
import { Text } from '../../styles/text';

export const InputContainer = styled.div`
    
`;

export const InputForm = styled.input`
    width: 60px;
    height: 25px;
    margin: ${props => props.orientation === 'horizontal' ? '0px 10px 0px 10px' : '10px 0px 10px 0px' };//10px;

    color: ${Colors.gray.default};
    background-color: white;

    border: none;
    border-radius: 5px;

    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.medium};
    font-size: ${Text.size.medium};
    text-align: center;

    box-shadow: 0px 2px 4px rgba(0,0,0,0.25);
    -webkit-appearance: none;
    opacity: 1;

    //Small screens, laptops
    @media(max-width: 1024){

    }

    //Tablets
    @media(max-width: 768px){

    }

    //Mobile BreakPoint
    @media (max-width: 480px){
        background-color: white;
        width: 80px;
        height: 35px;

        border: none;
        border-radius: 10px;

        font-size: ${Text.size.large};
    }

    &:disabled{
        background-color: rgb(245, 245, 245);
        -webkit-text-fill-color: ${Colors.gray.highContrast};
    }
`;