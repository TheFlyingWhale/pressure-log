import styled from 'styled-components';

import { Colors } from '../../styles/colors';
import { Text } from '../../styles/text';

export const InputContainer = styled.div`
    height: 45px;
`;

export const InputForm = styled.input`
    -webkit-appearance: none;
    opacity: 1;
    height: 45px;

    color: ${Colors.gray.default};
    background-color: white;
    margin: 5px;

    box-shadow: 0px 2px 4px rgba(0,0,0,0.25);

    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.medium};

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
        text-align: center;
    }

    &:disabled{
        background-color: rgb(245, 245, 245);
        -webkit-text-fill-color: ${Colors.gray.highContrast};
    }
`;