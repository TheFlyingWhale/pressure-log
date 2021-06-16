import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pressure: 25
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
        }
    }
});

export const { increment, decrement, setPressure, addPeriod } = rearLeftSlice.actions;

export const selectRearLeft = state => state.rearLeft.pressure;

export default rearLeftSlice.reducer;