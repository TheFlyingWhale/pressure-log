import { configureStore } from '@reduxjs/toolkit';

import mainPanelReducer from '../features/mainPanel/mainPanelSlice';

import trackSurfaceReducer from '../features/trackSurface/trackSurfaceSlice';
import frontLeftReducer from '../features/frontLeft/frontLeftSlice';
import frontRightReducer from '../features/frontRight/frontRightSlice';
import rearLeftReducer from '../features/rearLeft/rearLeftSlice';
import rearRightReducer from '../features/rearRight/rearRightSlice';

const reducer = {
    mainPanel: mainPanelReducer,
    trackSurface: trackSurfaceReducer,
    frontLeft: frontLeftReducer,
    frontRight: frontRightReducer,
    rearLeft: rearLeftReducer,
    rearRight: rearRightReducer,
}

export const store = configureStore({
  reducer,
});
