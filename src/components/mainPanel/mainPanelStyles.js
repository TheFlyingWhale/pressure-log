import styled from 'styled-components';

import { Colors } from '../../styles/colors';

export const Panel = styled.div`
    width: 750px;

    border-radius: 15px;

    margin: auto;
    padding: 15px;

    background-color: ${Colors.background.default};
    box-shadow: 0px 2px 4px rgba(0,0,0,0.15);

    //Small screens, laptops
    @media(max-width: 1024){
        background-color: yellow;
    }

    //Tablets
    @media(max-width: 768px){
        //background-color: orange;
    }

    //Mobile BreakPoint
    @media (max-width: 480px){
        max-width: 100%;
        padding: 0;
        padding-top: 15px;  
        
        background-color: white;
        box-shadow: none;
    }
`;

export const TemperatureContainer = styled.div`
    display:flex;
    justify-content: center;

    margin-bottom: 25px;
`;

export const MiddleContainer = styled.div`
    display: grid;

    width: 100%;
    height: 400px;

    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr;

    grid-template-areas:
        "frontLeft car frontRight"
        "rearLeft car rearRight";
    
    @media (max-width: 480px){
        height: 100%;

        grid-template-columns: 0.75fr 1fr 0.75fr ;
        grid-template-rows: 1fr 1fr;
    }
`;

export const FrontLeftItem = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    grid-area: frontLeft;
`;

export const FrontRightItem = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    grid-area: frontRight;
`;
export const RearLeftItem = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    grid-area: rearLeft;
`;

export const RearRightItem = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    grid-area: rearRight;
`;

export const CarItem = styled.div`
    width: 100%;
    height: 100%;
 
    grid-area: car;
`;

export const CarImage = styled.img`
    width: 100%;
    height: 100%;
`;