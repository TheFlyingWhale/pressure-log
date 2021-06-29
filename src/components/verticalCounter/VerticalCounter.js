import { useSelector, useDispatch } from "react-redux";

import { selectLockedState } from '../../features/mainPanel/mainPanelSlice';
import { parseInput } from '../../functions/helperFunctions';

//Component imports
import { Counter, Title, Difference, InteractionField} from './vcCounterStyles';
import { IncreaseButton } from '../increaseButton/increaseButton';
import { DecreaseButton } from '../decreaseButton/decreaseButton';
import { Input } from "../input/input";

export const VerticalCounter = props => {
    const dispatch = useDispatch();
    const lockedState = useSelector(selectLockedState);
    const difference = useSelector(props.selectDifference);
    const value = useSelector(props.selector)

    const handleChange = (event) => {
        if(!isNaN(event.nativeEvent.data) && event.target.value.length < 5){
            parseInput(event, props.addPeriod, props.setPressure, dispatch);
        }
        
    }

    const handleBlur = event => {
        if(event.target.value.length === 0){
            dispatch(props.setPressure(0));
        }
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
        <Counter
            counterSide={props.counterSide}
        >
            <Title>{props.name}</Title>
            <Difference>{difference}</Difference>
            <InteractionField>
                <IncreaseButton
                    handleIncrement={handleIncrement}
                />
                <Input 
                    value={value}
                    disabled={lockedState ? true : false}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    orientation="vertical"
                />
                <DecreaseButton 
                    handleDecrement={handleDecrement}
                />
            </InteractionField>
        </Counter>
    )
}