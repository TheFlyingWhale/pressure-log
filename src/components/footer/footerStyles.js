import styled from 'styled-components';

import { Text } from '../../styles/text';
import { Colors } from '../../styles/colors';

export const FooterContainer = styled.div`
    max-width: 750px;
    padding: 15px;
    margin: 25px auto;

    border-radius: 15px;
    background-color: ${Colors.background.default};
    box-shadow: 0px 2px 4px rgba(0,0,0,0.15);

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "leftSide rightSide";

    @media (max-width: 480px){
        background-color: white;
        box-shadow: none;
    }
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