import { useSelector, useDispatch } from 'react-redux';
import { selectLockedState } from '../../features/mainPanel/mainPanelSlice';

import { setTemperature } from '../../features/trackSurface/trackSurfaceSlice';

import { Counter } from './hzCounterStyles';

export const HorizontalCounter = props => {
    const dispatch = useDispatch();
    const lockedState = useSelector(selectLockedState);
    const value = useSelector(props.selector);
    const difference = useSelector(props.selectDifference);

    const handleChange = (event) => {
        if(event.target.value.length < 3){
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
            <p><b>{props.name}</b></p>
            <p>Difference: {difference}</p>
            <button
                onClick={handleIncrement}
            >+</button>
            <input
                value={value}
                disabled={lockedState ? true : false}
                onChange={handleChange}
            ></input>
            <button
                onClick={handleDecrement}
            >-</button>
        </Counter>
    )
}