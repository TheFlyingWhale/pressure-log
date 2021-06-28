import styled from 'styled-components';

import { Colors } from '../../styles/colors';
import { Button } from '../../styles/buttonStyles';

export const StyledSettingsButton = styled(Button)`
    background-color: ${Colors.gray.default};
    
    &:disabled{
        background-color: ${Colors.gray.lowContrast};
    }
`;