import { useSelector, useDispatch } from "react-redux";

import { selectLockedState } from '../../features/mainPanel/mainPanelSlice';
import { parseInput } from '../../helperFunctions.js';

export const VerticalCounter = props => {
    const lockedState = useSelector(selectLockedState);
    const value = useSelector(props.selector)
    const dispatch = useDispatch();

    const handleChange = (event) => {
        parseInput(event, props.addPeriod, props.setPressure, dispatch);
    }

    return(
        <div>
            <p>I'm the {props.name}</p>
            <button
                onClick={() => dispatch(props.increment())}
            >+</button>
            <input
                value={value}
                disabled={lockedState ? true : false}
                onChange={handleChange}
            >
            </input>
            <button
                onClick={() => dispatch(props.decrement())}
            >-</button>
        </div>
    )
}