import { StyledResetButton } from './resetButtonStyles';
import { ButtonContainer, ButtonTitle, IconContainer, StyledIcon } from '../../styles/buttonStyles';

import resetIcon from '../../graphics/resetIcon.svg';

export const ResetButton = props => {
    return(
        <ButtonContainer>
            <ButtonTitle>Reset</ButtonTitle>
            <StyledResetButton
                onClick={props.handleReset}
                disabled={props.lockedState}
            >
                <IconContainer>
                    <StyledIcon
                        alt={props.lockedState ? 'Reset disabled' : 'Reset'}
                        src={resetIcon}
                    />
                </IconContainer>
            </StyledResetButton>
        </ButtonContainer>
    );
}