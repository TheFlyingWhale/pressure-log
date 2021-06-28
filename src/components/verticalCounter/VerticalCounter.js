import { useSelector, useDispatch } from "react-redux";

import { selectLockedState } from '../../features/mainPanel/mainPanelSlice';
import { parseInput } from '../../functions/helperFunctions';

//Component imports
import { Counter, Title, Difference } from './vcCounterStyles';
import { IncreaseButton } from '../increaseButton/increaseButton';
import { DecreaseButton } from '../decreaseButton/decreaseButton';
import { Input } from "../input/input";

export const VerticalCounter = props => {
    const dispatch = useDispatch();
    const lockedState = useSelector(selectLockedState);
    const difference = useSelector(props.selectDifference);
    const value = useSelector(props.selector)

    const handleChange = (event) => {
        parseInput(event, props.addPeriod, props.setPressure, dispatch);
    }

    const handleIncrement = () => {
        dispatch(props.increment());
        if(lockedState){
            dispatch(props.increaseDifference());
        }
    }

    const handleDecrement = () => {
        dispatch(props.decrement());
        if(lockedState){
            dispatch(props.decreaseDifference());
        }
    }

    return(
        <Counter>
            <Title>{props.name}</Title>
            <Difference>Difference: {difference}</Difference>
            <IncreaseButton
                handleIncrement={handleIncrement}
            />
            <Input 
                value={value}
                disabled={lockedState ? true : false}
                handleChange={handleChange}
            />
            <DecreaseButton 
                handleDecrement={handleDecrement}
            />
        </Counter>
    )
}