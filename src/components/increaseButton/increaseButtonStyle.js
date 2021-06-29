import styled from 'styled-components';

export const IncreaseButtonContainer = styled.div``;

export const StyledIncreaseButton = styled.button`
    width: 22px;
    height: 22px;

    border: none;
    border-radius: 5px;

    background-color: white;

    box-shadow: 0px 2px 4px rgba(0,0,0,0.25);
    
    //Small screens, laptops
    @media(max-width: 1024){

    }

    //Tablets
    @media(max-width: 768px){

    }

    //Mobile BreakPoint
    @media (max-width: 480px){
        width: 35px;
        height: 35px;

        border: none;
        border-radius: 10px;
    }
`;

export const IncreaseIcon = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 5px;

    @media (max-width: 480px){
        padding: 10px;
    }
`;

export const Icon = styled.img`
    width: 100%;
    height: 100%;
`;