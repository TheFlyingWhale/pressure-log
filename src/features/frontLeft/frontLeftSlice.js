import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pressure: 25,
    difference: 0
}

export const frontLeftSlice = createSlice({
    name: 'frontLeft',
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

export const { increment, decrement, setPressure, addPeriod, increaseDifference, decreaseDifference, setDifference } = frontLeftSlice.actions;

export const selectFrontLeft = state => state.frontLeft.pressure;
export const selectDifference = state => state.frontLeft.difference;

export default frontLeftSlice.reducer;