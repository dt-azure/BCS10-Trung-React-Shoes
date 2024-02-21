import { DECREMENT, INCREASE, INCREMENT } from "./constant";

let initialState = {
    value: 1,
};

export let numberReducer = (state = initialState, action) => { 
    switch (action.type) {
        case INCREMENT: {
            state.value++;

            return {...state};
        }

        case DECREMENT: {
            state.value--;

            return {...state};
        }

        case INCREASE: {
            state.value += action.input;

            return {...state}
        }

        default:
            return state;
    }
};