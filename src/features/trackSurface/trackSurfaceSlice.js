import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    temperature: 20
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
        },
        setTemperature: (state, action) => {
            state.temperature = action.payload;
        }
    }
});

export const { increment, decrement, setTemperature } = trackSurfaceSlice.actions;

export const selectTrackSurface = state => state.trackSurface.temperature;

export default trackSurfaceSlice.reducer;