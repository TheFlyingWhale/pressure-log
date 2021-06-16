import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pressure: 29,
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
        }
    }
});

export const { increment, decrement, setPressure, addPeriod } = rearRightSlice.actions;

export const selectRearRight = state => state.rearRight.pressure;

export default rearRightSlice.reducer;