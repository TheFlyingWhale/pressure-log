import { useSelector, useDispatch } from "react-redux";

//Features
import {lock, unlock, selectLockedState } from "../../features/mainPanel/mainPanelSlice";
import { setPressure as setFL, setDifference as difFL } from '../../features/frontLeft/frontLeftSlice';
import { setPressure as setFR, setDifference as difFR } from '../../features/frontRight/frontRightSlice';
import { setPressure as setRL, setDifference as difRL } from '../../features/rearLeft/rearLeftSlice';
import { setPressure as setRR, setDifference as difRR } from '../../features/rearRight/rearRightSlice';
import { setTemperature, setDifference as difTrack } from '../../features/trackSurface/trackSurfaceSlice';
import { store } from '../../app/store';
import { setTyres } from '../../functions/localStorage';

//Components
import { LockButton } from '../lockButton/lockButton';
import { ResetButton } from "../resetButton/resetButton";
import { SettingsButton } from '../settingsButton/settingsButton';

//Styles
import { Container } from './controlPanelStyles';

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

    const handleLock = () => {
        if(lockedState){
            dispatch(unlock());
            dispatch(difFL(0));
            dispatch(difFR(0));            
            dispatch(difRL(0));            
            dispatch(difRR(0));
            dispatch(difTrack(0));
        }else{
            dispatch(lock());
            const storage = store.getState();
            setTyres(storage.frontLeft.pressure, storage.frontRight.pressure, storage.rearLeft.pressure, storage.rearRight.pressure);
        }
    }
    
    return (
        <Container>
            <LockButton
                handleLock={handleLock}
                lockedState={lockedState}
            />
            <ResetButton
                handleReset={handleReset}
                lockedState={lockedState}
            />
            <SettingsButton
                lockedState={lockedState} 
            />
        </Container>
    )
}