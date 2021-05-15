import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;

/* import { createStore } from 'redux'; */
/* import { createSlice, configureStore } from '@reduxjs/toolkit'; */

/* const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        };
    }
    return state;
}; */

//const store = createStore(counterReducer);

//const store = createStore(counterSlice.reducer);

/* const store = configureStore({
    reducer: counterSlice.reducer
});
export const counterActions = counterSlice.actions; */
/* const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store; */