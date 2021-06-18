import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pressure: 25,
    difference: 0
}

export const rearRightSlice = createSlice({
    name: 'rearRight',
    initialState,
    reducers: {
        increment: (state) => {
            state.pressure = (state.pressure * 10 + 0.1 * 10) / 10;
        },
        decrement: (state) => {
            state.pressure = (state.pressure * 10 - 0.1 * 10) / 10;
        },
        setPressure: (state, action) => {
            state.pressure = action.payload;
        },
        addPeriod: (state) => {
            state.pressure = state.pressure + '.';
        },
        increaseDifference: state => {
            state.difference = (state.difference * 10 + 0.1 * 10) / 10;
        },
        decreaseDifference: state => {
            state.difference = (state.difference * 10 - 0.1 * 10) / 10;
        },
        setDifference: (state, action) => {
            state.difference = action.payload;
        }
    }
});

export const { increment, decrement, setPressure, addPeriod, increaseDifference, decreaseDifference, setDifference } = rearRightSlice.actions;

export const selectRearRight = state => state.rearRight.pressure;
export const selectDifference = state => state.rearRight.difference;

export default rearRightSlice.reducer;