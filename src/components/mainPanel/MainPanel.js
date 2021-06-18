import { VerticalCounter } from '../verticalCounter/VerticalCounter';
import { HorizontalCounter } from '../horizontalCounter/HorizontalCounter';

import { 
    selectTrackSurface,
    increment as tsIncrement, 
    decrement as tsDecrement,  
    selectDifference as selectDifTrack,
    increaseDifference as incDifTrack,
    decreaseDifference as decDifTrack,
    setDifference as setDifTrack,
} from '../../features/trackSurface/trackSurfaceSlice';

import { 
    selectFrontLeft,
    increment as flIncrement, 
    decrement as flDecrement, 
    setPressure as flSetPressure,
    addPeriod as flAddPeriod, 
    selectDifference as selectDifFL,
    increaseDifference as incDifFL,
    decreaseDifference as decDifFL,
    setDifference as setDifFL 
} from '../../features/frontLeft/frontLeftSlice';
import {
    selectFrontRight,
    increment as frIncrement,
    decrement as frDecrement, 
    setPressure as frSetPressure,
    addPeriod as frAddPeriod,
    selectDifference as selectDifFR,
    increaseDifference as incDifFR,
    decreaseDifference as decDifFR,
    setDifference as setDifFR
} from '../../features/frontRight/frontRightSlice';
import {
    selectRearLeft,
    increment as rlIncrement, 
    decrement as rlDecrement, 
    setPressure as rlSetPressure,
    addPeriod as rlAddPeriod,
    selectDifference as selectDifRL,
    increaseDifference as incDifRL,
    decreaseDifference as decDifRL,
    setDifference as setDifRL
} from '../../features/rearLeft/rearLeftSlice';
import {
    selectRearRight, 
    increment as rrIncrement,
    decrement as rrDecrement,
    setPressure as rrSetPressure,
    addPeriod as rrAddPeriod, 
    selectDifference as selectDifRR,
    increaseDifference as incDifRR,
    decreaseDifference as decDifRR,
    setDifference as setDifRR
} from '../../features/rearRight/rearRightSlice';

import { ControlPanel } from '../mainPanel/controlPanel';

export const MainPanel = () => {
    return (
        <div>
            <h1>This is the main panel</h1>
            <HorizontalCounter
                name="Track Surface"
                selector={selectTrackSurface}
                increment={tsIncrement}
                decrement={tsDecrement}
                selectDifference={selectDifTrack}
                increaseDifference={incDifTrack}
                decreaseDifference={decDifTrack}
                setDifference={setDifTrack}
            ></HorizontalCounter>

            <VerticalCounter
                name="frontLeft"
                selector={selectFrontLeft}
                increment={flIncrement}
                decrement={flDecrement}
                setPressure={flSetPressure}
                addPeriod={flAddPeriod}
                selectDifference={selectDifFL}
                increaseDifference={incDifFL}
                decreaseDifference={decDifFL}
                setDifference={setDifFL}
            ></VerticalCounter>

            <VerticalCounter
                name="frontRight"
                selector={selectFrontRight}
                increment={frIncrement}
                decrement={frDecrement}
                setPressure={frSetPressure}
                addPeriod={frAddPeriod}
                selectDifference={selectDifFR}
                increaseDifference={incDifFR}
                decreaseDifference={decDifFR}
                setDifference={setDifFR}
            ></VerticalCounter>

            <VerticalCounter
                name="rearLeft"
                selector={selectRearLeft}
                increment={rlIncrement}
                decrement={rlDecrement}
                setPressure={rlSetPressure}
                addPeriod={rlAddPeriod}
                selectDifference={selectDifRL}
                increaseDifference={incDifRL}
                decreaseDifference={decDifRL}
                setDifference={setDifRL}
            ></VerticalCounter>
            
            <VerticalCounter
                name="rearRight"
                selector={selectRearRight}
                increment={rrIncrement}
                decrement={rrDecrement}
                setPressure={rrSetPressure}
                addPeriod={rrAddPeriod}
                selectDifference={selectDifRR}
                increaseDifference={incDifRR}
                decreaseDifference={decDifRR}
                setDifference={setDifRR}
            ></VerticalCounter>

            <ControlPanel
            ></ControlPanel>
        </div>
    )
}