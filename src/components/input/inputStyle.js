import styled from 'styled-components';

import { Colors } from '../../styles/colors';

export const InputContainer = styled.div``;

export const InputForm = styled.input`
    -webkit-appearance: none;
    opacity: 1;
    color: ${Colors.gray.default};

    background-color: white;
    margin: 5px;

    box-shadow: 0px 2px 4px rgba(0,0,0,0.25);

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

        font-size: 24px;
        text-align: center;
    }

    &:disabled{
        background-color: rgb(245, 245, 245);
        -webkit-text-fill-color: ${Colors.gray.highContrast};
    }
`;