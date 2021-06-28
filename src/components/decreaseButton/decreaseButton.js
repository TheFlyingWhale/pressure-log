import { DecreaseButtonContainer, StyledDecreaseButton, DecreaseIcon, Icon } from "./decreaseButtonStyle";

import decreaseIcon from '../../graphics/decreaseIcon.svg';

export const DecreaseButton = props => {
    return(
        <DecreaseButtonContainer>
            <StyledDecreaseButton
                onClick={props.handleDecrement}
            >
                <DecreaseIcon>
                    <Icon alt="increase" src={decreaseIcon}/>
                </DecreaseIcon>
            </StyledDecreaseButton>
        </DecreaseButtonContainer>
    );
}