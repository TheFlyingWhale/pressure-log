import { VerticalCounter } from '../verticalCounter/VerticalCounter';
import { HorizontalCounter } from '../horizontalCounter/HorizontalCounter';

import { increment as tsIncrement, decrement as tsDecrement, selectTrackSurface } from '../../features/trackSurface/trackSurfaceSlice';

import { increment as flIncrement, decrement as flDecrement, setPressure as flSetPressure, selectFrontLeft } from '../../features/frontLeft/frontLeftSlice';
import { increment as frIncrement, decrement as frDecrement, selectFrontRight } from '../../features/frontRight/frontRightSlice';
import { increment as rlIncrement, decrement as rlDecrement, selectRearLeft } from '../../features/rearLeft/rearLeftSlice';
import { increment as rrIncrement, decrement as rrDecrement, selectRearRight} from '../../features/rearRight/rearRightSlice';

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
            ></HorizontalCounter>

            <VerticalCounter
                name="frontLeft"
                selector={selectFrontLeft}
                increment={flIncrement}
                decrement={flDecrement}
                setPressure={flSetPressure}
            ></VerticalCounter>

            <VerticalCounter
                name="frontRight"
                selector={selectFrontRight}
                increment={frIncrement}
                decrement={frDecrement}
            ></VerticalCounter>

            <VerticalCounter
                name="rearLeft"
                selector={selectRearLeft}
                increment={rlIncrement}
                decrement={rlDecrement}
            ></VerticalCounter>
            
            <VerticalCounter
                name="rearRight"
                selector={selectRearRight}
                increment={rrIncrement}
                decrement={rrDecrement}
            ></VerticalCounter>

            <ControlPanel
            ></ControlPanel>
        </div>
    )
}