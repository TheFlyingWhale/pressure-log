import { useSelector, useDispatch } from "react-redux";

import { selectLockedState } from '../../features/mainPanel/mainPanelSlice';
import { parseInput } from '../../helperFunctions.js';

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
        <div>
            <p>I'm the {props.name}</p>
            {lockedState ? <p>Difference: {difference}</p> : null}
            <button
                onClick={handleIncrement}
            >+</button>
            <input
                value={value}
                disabled={lockedState ? true : false}
                onChange={handleChange}
            >
            </input>
            <button
                onClick={handleDecrement}
            >-</button>
        </div>
    )
}