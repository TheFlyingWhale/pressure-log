import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    temperature: 15
}

export const trackSurfaceSlice = createSlice({
    name: 'trackSurface',
    initialState,
    reducers: {
        increment: state => {
            state.temperature += 1;
        },
        decrement: state => {
            state.temperature -= 1;
        }
    }
});

export const { increment, decrement } = trackSurfaceSlice.actions;

export const selectTrackSurface = state => state.trackSurface.temperature;

export default trackSurfaceSlice.reducer;