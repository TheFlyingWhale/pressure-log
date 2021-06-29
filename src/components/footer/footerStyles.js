import styled from 'styled-components';

import { Text } from '../../styles/text';
import { Colors } from '../../styles/colors';

export const FooterItem = styled.div`
    max-width: 750px;
    padding: 15px;
    margin: auto;

    border-radius: 15px;
    background-color: ${Colors.background.default};
    box-shadow: 0px 10px 25px rgba(0,0,0,0.25);
    border: 1px solid ${Colors.gray.border};

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "leftSide rightSide";

    @media (max-width: 480px){
        background-color: white;
        box-shadow: none;
        border: none;
    }
`;

export const FooterContainer = styled.div`
    padding: 25px;
    
`;

export const VersionText = styled.p`
    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.light};
    font-size: ${Text.size.small};

    color: ${Colors.text.default};
`;

export const DevelopedBy = styled.p`
    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.light};
    font-size: ${Text.size.small};

    color: ${Colors.text.default};
`;

export const LeftSideContainer = styled.div`
    height: 75px;
    padding: 15px;
`;

export const RightSideContainer = styled.div`
    height: 75px;
    padding: 15px;

    text-align: center;
`;

export const Logo = styled.img`
    height: 100%;
    width: 100%;
`;