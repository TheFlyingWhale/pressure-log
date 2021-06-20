import styled from 'styled-components';

export const Panel = styled.div`
    width: 750px;

    border-radius: 15px;

    margin: auto;
    padding: 15px;

    background-color: #F6F6F6;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.15);

    //Small screens, laptops
    @media(max-width: 1024){
        background-color: yellow;
    }

    //Tablets
    @media(max-width: 768px){
        background-color: orange;
    }

    //Mobile BreakPoint
    @media (max-width: 480px){
        max-width: 100%;
        background-color: pink;
    }
`;

export const PressureContainer = styled.div`
    display:flex;
    justify-content: space-between;
`;

export const TemperatureContainer = styled.div`
    display:flex;
    justify-content: center;
`;