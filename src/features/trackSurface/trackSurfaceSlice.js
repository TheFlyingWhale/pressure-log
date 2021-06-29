import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    temperature: 20,
    difference: 0
}

export const trackSurfaceSlice = createSlice({
    name: 'trackSurface',
    initialState,
    reducers: {
        increment: state => {
            state.temperature = parseInt(state.temperature, 10) + 1;
        },
        decrement: state => {
            state.temperature = state.temperature - 1;
        },
        setTemperature: (state, action) => {
            state.temperature = action.payload;
        },
        increaseDifference: state => {
            state.difference = state.difference + 1;
        },
        decreaseDifference: state => {
            state.difference = state.difference - 1;
        },
        setDifference: (state, action) => {
            state.difference = action.payload;
        }
    }
});

export const { increment, decrement, setTemperature, increaseDifference, decreaseDifference, setDifference } = trackSurfaceSlice.actions;

export const selectTrackSurface = state => state.trackSurface.temperature;
export const selectDifference = state => state.trackSurface.difference;

export default trackSurfaceSlice.reducer;