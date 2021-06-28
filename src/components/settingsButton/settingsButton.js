import { StyledSettingsButton } from "./settingsButtonStyles";
import { ButtonContainer, ButtonTitle, IconContainer, StyledIcon } from "../../styles/buttonStyles";

import settingsIcon from '../../graphics/settingsIcon.svg';

export const SettingsButton = props => {
    return(
        <ButtonContainer>
            <ButtonTitle>Settings</ButtonTitle>
            <StyledSettingsButton
                lockedState={props.lockedState}
                disabled={true}
            >
                <IconContainer>
                    <StyledIcon 
                        src={settingsIcon}
                        alt="settings"
                    />
                </IconContainer>
            </StyledSettingsButton>
        </ButtonContainer>
    );
}