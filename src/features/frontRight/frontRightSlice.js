import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pressure: 27.0
}

export const frontRightSlice = createSlice({
    name: 'frontRight',
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
        }
    }
});

export const { increment, decrement, setPressure, addPeriod } = frontRightSlice.actions;

export const selectFrontRight = (state) => state.frontRight.pressure;

export default frontRightSlice.reducer;