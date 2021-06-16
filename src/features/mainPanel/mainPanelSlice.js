import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    locked: false,
}

export const mainPanelSlice = createSlice({
    name: 'mainPanel',
    initialState,
    reducers:{
        lock: state => {
            state.locked = true;
        },
        unlock: state => {
            state.locked = false;
        }
    }
});

export const { lock, unlock } = mainPanelSlice.actions;

export const selectLockedState = state => state.mainPanel.locked;

export default mainPanelSlice.reducer;
