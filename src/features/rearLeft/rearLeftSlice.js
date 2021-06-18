import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pressure: 25,
    difference: 0
}

export const rearLeftSlice = createSlice({
    name: 'rearLeft',
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

export const { increment, decrement, setPressure, addPeriod, increaseDifference, decreaseDifference, setDifference } = rearLeftSlice.actions;

export const selectRearLeft = state => state.rearLeft.pressure;
export const selectDifference = state => state.rearLeft.difference;

export default rearLeftSlice.reducer;