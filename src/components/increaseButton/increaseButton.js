import { IncreaseButtonContainer, StyledIncreaseButton, IncreaseIcon, Icon } from "./increaseButtonStyle";

import increaseIcon from '../../graphics/increaseIcon.svg';

export const IncreaseButton = props => {
    return(
        <IncreaseButtonContainer>
            <StyledIncreaseButton
                onClick={props.handleIncrement}
            >
                <IncreaseIcon>
                    <Icon alt="increase" src={increaseIcon}/>
                </IncreaseIcon>
            </StyledIncreaseButton>
        </IncreaseButtonContainer>
    );
}