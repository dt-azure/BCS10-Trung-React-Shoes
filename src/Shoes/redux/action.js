import { ADD_TO_CART, CHANGE_AMOUNT, CHANGE_DETAILS } from "./constant"

export let changeDetailsAction = (item) => {
    return {
        type: CHANGE_DETAILS,
        payload: item,
    };
};

export let addToCartAction = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item,
    };
};

export let changeAmountAction = (id, value) => {
    return {
        type: CHANGE_AMOUNT,
        payload: {
            id,
            value
        }
    };
};
