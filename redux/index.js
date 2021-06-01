// Pseudo-imports (Redux is in the global scope)
const combineReducers = Redux.combineReducers;
const createStore = Redux.createStore;
const bindActionCreators = Redux.bindActionCreators;


// Constants (using below and in reducer)
const MIN = 0;
const MAX = 100;

// Adding constants data in DOM
document.getElementById('from').textContent = MIN;
document.getElementById('to').textContent = MAX;






// Redux 

// Action types
const incAT = 'INC';
const decAT = 'DEC';

// Action creates
const incAC = () => ({ type: incAT });
const decAC = () => ({ type: decAT });

// Reducer (with initial state object)
const initialState = {
    value: 42
};
const counter = (state = initialState, action) => {
    let res;
    switch(action.type) {
        case incAT:
            res = state.value + 1;
            return {
                ...state,
                value: res >= MAX ? MAX : res
            };
        case decAT:
            res = state.value - 1;
            return {
                ...state,
                value: res > MIN ? res : MIN
            };
        default: 
            return state;
    }
}        

// Store creating (with combineReducers's optional help)
const store = createStore(combineReducers({
    counter
}));

// Optional binding (just for fun)
const { inc, dec } = bindActionCreators({
    inc: incAC,
    dec: decAC
}, store.dispatch);

// Add handlers
document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);

// First render and subscribe (call render when state changes)
const update = () => {
    document.getElementById('counter')
        .textContent = store.getState().counter.value;
}
update();
store.subscribe(update);