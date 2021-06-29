import styled from 'styled-components';

import { Colors} from '../../styles/colors';
import { Button } from '../../styles/buttonStyles';

export const StyledLockButton = styled(Button)`
    background-color: ${props => props.lockedState ? Colors.orange.default : Colors.green.default};
    color: white;

    &:active{
        background-color: ${props => props.lockedState ? Colors.orange.active : Colors.green.active};
    }

    @media(hover:hover){
        &:hover{
            cursor: pointer;
            background-color: ${props => props.lockedState ? Colors.orange.hover : Colors.green.hover};
        }
    }
`;