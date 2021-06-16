import { useSelector, useDispatch } from "react-redux";

import {lock, unlock, selectLockedState } from "../../features/mainPanel/mainPanelSlice";

export const ControlPanel = props => {
    const lockedState = useSelector(selectLockedState);
    const dispatch = useDispatch();
    
    return (
        <div>
            <button
                onClick={() => {lockedState ? dispatch(unlock()) : dispatch(lock())}}
            >{lockedState ? 'unlock' : 'lock'}</button>
        </div>
    )
}