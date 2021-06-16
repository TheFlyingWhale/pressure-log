import { useSelector, useDispatch } from "react-redux";

import {lock, unlock, selectLockedState } from "../../features/mainPanel/mainPanelSlice";
import { setPressure as setFL } from '../../features/frontLeft/frontLeftSlice';
import { setPressure as setFR } from '../../features/frontRight/frontRightSlice';
import { setPressure as setRL } from '../../features/rearLeft/rearLeftSlice';
import { setPressure as setRR } from '../../features/rearRight/rearRightSlice';
import { setTemperature } from '../../features/trackSurface/trackSurfaceSlice';

export const ControlPanel = props => {
    const lockedState = useSelector(selectLockedState);
    const dispatch = useDispatch();

    const handleReset = () => {
        if(!lockedState){
            dispatch(setTemperature(20));
            dispatch(setFL(25));
            dispatch(setFR(25));
            dispatch(setRL(25));
            dispatch(setRR(25));
        }
    }
    
    return (
        <div>
            <button
                onClick={() => {lockedState ? dispatch(unlock()) : dispatch(lock())}}
            >{lockedState ? 'unlock' : 'lock'}</button>
            <button
                onClick={handleReset}
                disabled={lockedState}
            >Reset</button>
        </div>
    )
}