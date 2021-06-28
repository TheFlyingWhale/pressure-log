import { StyledLockButton } from './lockButtonStyles';
import { ButtonContainer, ButtonTitle, IconContainer, StyledIcon } from '../../styles/buttonStyles';

import lockIcon from '../../graphics/lockIcon.svg';

export const LockButton = props => {
    return(
        <ButtonContainer>
            <ButtonTitle>Lock</ButtonTitle>
            <StyledLockButton
                onClick={props.handleLock}
                lockedState={props.lockedState}
            >
                <IconContainer>
                    <StyledIcon
                        src={lockIcon}
                        alt={props.lockedState ? 'Unlock' : 'Lock'}
                    />
                </IconContainer>
            </StyledLockButton>
        </ButtonContainer>
    );
}