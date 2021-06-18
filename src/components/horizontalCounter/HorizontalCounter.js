import { useSelector, useDispatch } from 'react-redux';
import { selectLockedState } from '../../features/mainPanel/mainPanelSlice';

import { setTemperature } from '../../features/trackSurface/trackSurfaceSlice';

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
        <div>
            <p>{props.name}</p>
            {lockedState ? <p>Difference: {difference}</p> : null}
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
        </div>
    )
}