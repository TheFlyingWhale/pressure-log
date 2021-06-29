import styled from 'styled-components';

import { Text } from '../../styles/text';
import { Colors } from '../../styles/colors';

export const FooterContainer = styled.div`
    max-width: 750px;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "leftSide rightSide";

    padding: 15px;

    text-align: center;
`;

export const VersionText = styled.p`
    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.light};
    font-size: ${Text.size.small};

    color: ${Colors.text.lowContrast};
`;

export const DevelopedBy = styled.p`
    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.light};
    font-size: ${Text.size.small};

    color: ${Colors.text.lowContrast};
`;

export const LeftSideContainer = styled.div`
    height: 75px;
    padding: 15px;
`;

export const RightSideContainer = styled.div`
    height: 75px;
    padding: 15px;
`;

export const Logo = styled.img`
    height: 100%;
    width: 100%;
`;