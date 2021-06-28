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

export const Title = styled.h1`
    text-align: center;

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
        display: none;
    }
`;

export const MiddleContainer = styled.div`
    display: grid;
    width: 100%;

    grid-template-columns: 0.75fr 1fr 0.75fr ;
    grid-template-rows: 1fr 1fr;

    grid-template-areas:
        "frontLeft car frontRight"
        "rearLeft car rearRight";
`;

export const FrontLeftItem = styled.div`
    width: 100%;
    height: 100%;

    grid-area: frontLeft;
`;

export const FrontRightItem = styled.div`
    width: 100%;
    height: 100%;

    grid-area: frontRight;
`;
export const RearLeftItem = styled.div`
    width: 100%;
    height: 100%;

    grid-area: rearLeft;
`;

export const RearRightItem = styled.div`
    width: 100%;
    height: 100%;

    grid-area: rearRight;
`;

export const CarItem = styled.div`
    width: 100%;
    height: 100%;
 
    grid-area: car;
`;