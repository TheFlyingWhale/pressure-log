import { useSelector, useDispatch } from 'react-redux';

export const HorizontalCounter = props => {
    const value = useSelector(props.selector);
    const dispatch = useDispatch();

    return(
        <div>
            <p>I'm the {props.name}</p>
            <button
                onClick={() => dispatch(props.increment())}
            >+</button>
            <input
                value={value}
                disabled={true}
            ></input>
            <button
                onClick={() => dispatch(props.decrement())}
            >-</button>
        </div>
    )
}