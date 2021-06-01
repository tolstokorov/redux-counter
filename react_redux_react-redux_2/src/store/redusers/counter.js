import { decAT, incAT } from "../action-types/counter";

const initialState = {
    value: 42,
    min: 0,
    max: 100,
};
const counter = (state = initialState, action) => {
    let res;
    switch(action.type) {
        case incAT:
            const MAX = state.max;
            res = state.value + 1;
            return {
                ...state,
                value: res >= MAX ? MAX : res
            };
        case decAT:
            const MIN = state.min;
            res = state.value - 1;
            return {
                ...state,
                value: res > MIN ? res : MIN
            };
        default: 
            return state;
    }
};

export default counter;