import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

export const VerticalCounter = props => {
    const value = useSelector(props.selector);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        console.log(value);
        console.log(value.length);
        //dispatch(props.setPressure(event.target.value));
    }

    return(
        <div>
            <p>I'm the {props.name}</p>
            <button
                onClick={() => dispatch(props.increment())}
            >+</button>
            <input
                value={value}
                disabled={false}
                onChange={handleChange}
            >
            </input>
            <button
                onClick={() => dispatch(props.decrement())}
            >-</button>
        </div>
    )
}