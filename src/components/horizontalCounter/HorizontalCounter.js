import { useSelector, useDispatch } from 'react-redux';
import { selectLockedState } from '../../features/mainPanel/mainPanelSlice';

export const HorizontalCounter = props => {
    const lockedState = useSelector(selectLockedState);
    const value = useSelector(props.selector);
    const dispatch = useDispatch();

    const handleChange = () => {

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
            ></input>
            <button
                onClick={() => dispatch(props.decrement())}
            >-</button>
        </div>
    )
}