import { useSelector, useDispatch } from 'react-redux';

import { selectLockedState } from '../../features/mainPanel/mainPanelSlice';
import { setTemperature } from '../../features/trackSurface/trackSurfaceSlice';

//Component Imports
import { Counter, Title, Difference, InteractionField } from './hzCounterStyles';
import { IncreaseButton } from '../increaseButton/increaseButton';
import { DecreaseButton } from '../decreaseButton/decreaseButton';
import { Input } from '../input/input';

export const HorizontalCounter = props => {
    const dispatch = useDispatch();
    const lockedState = useSelector(selectLockedState);
    const value = useSelector(props.selector);
    const difference = useSelector(props.selectDifference);

    const handleChange = (event) => {
        if(!isNaN(event.nativeEvent.data) && event.target.value.length < 3){
            dispatch(setTemperature(event.target.value));
        }
    }

    const handleBlur = event => {
        if(event.target.value.length === 0){
            dispatch(setTemperature(0));
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
        <Counter>
            <Title>{props.name}</Title>
            <Difference>Difference: {difference}</Difference>
            <InteractionField>
                <IncreaseButton 
                    handleIncrement={handleIncrement}
                />
                <Input 
                    value={value}
                    disabled={lockedState ? true : false}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                />
                <DecreaseButton 
                    handleDecrement={handleDecrement}
                />
            </InteractionField>
        </Counter>
    )
}