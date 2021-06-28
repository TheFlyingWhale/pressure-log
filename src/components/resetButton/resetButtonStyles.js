import styled from 'styled-components';
import { Button } from '../../styles/buttonStyles';
import { Colors } from '../../styles/colors';

export const StyledResetButton = styled(Button)`
    background-color: #FF2F2F;
    color: white;

    &:active{
        background-color: #E02727;
    }

    &:disabled{
        background-color: ${Colors.gray.lowContrast};
    }
`;