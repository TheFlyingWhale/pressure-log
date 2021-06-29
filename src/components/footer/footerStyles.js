import styled from 'styled-components';

import { Text } from '../../styles/text';
import { Colors } from '../../styles/colors';

export const FooterContainer = styled.div`
    width: 100%;

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