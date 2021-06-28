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
        console.log('handleChange triggered');
        console.log(event.target.value);
        if(event.target.value.length <= 2){
            dispatch(setTemperature(event.target.value));
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
                />
                <DecreaseButton 
                    handleDecrement={handleDecrement}
                />
            </InteractionField>
        </Counter>
    )
}