import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pressure: 26.0
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
        }
    }
});

export const { increment, decrement, setPressure, addPeriod } = frontLeftSlice.actions;

export const selectFrontLeft = state => state.frontLeft.pressure;

export default frontLeftSlice.reducer;