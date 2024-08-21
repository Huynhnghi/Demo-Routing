
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        deposit: (state, action) => state + action.payload,
        withdraw: (state, action) => state - action.payload,
    },
});

export const { deposit, withdraw } = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer,
});

export default store;
