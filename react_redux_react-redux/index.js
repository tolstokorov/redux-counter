// Pseudo-imports (React, ReactDOM, Redux, ReactRedux are in the global scope)
const combineReducers = Redux.combineReducers;
const createStore = Redux.createStore;
const bindActionCreators = Redux.bindActionCreators;

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;












// Redux 

// Action types
const incAT = 'INC';
const decAT = 'DEC';

// Action creates
const incAC = () => ({ type: incAT });
const decAC = () => ({ type: decAT });

// Reducer (with initial state object)
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
}        

// Store creating (with combineReducers's optional help)
const store = createStore(combineReducers({
    counter
}));













// React

const Title = ({ min, max }) => {
    return (
        <h1 class='title'>
            Счётчик от <span id='from'>{ min }</span> до <span id='to'>{ max }</span>
        </h1>
    );
};
const mapStateToPropsTitle = state => {
    return {
        min: state.counter.min,
        max: state.counter.max
    };
};
const ConnectedTitle = connect(mapStateToPropsTitle)(Title);


const Counter = ({ value, inc, dec }) => {
    return (
        <div class='app'>
            <button id='dec' class='btn'
                onClick={ dec }
            >&#8722;</button>
            <span id='counter' class='counter'>{ value }</span>
            <button id='inc' class='btn'
                onClick={ inc }
            >&#43;</button>
        </div>
    );
};
const mapStateToPropsCounter = state => {
    return {
        value: state.counter.value
    };
};
const actions = {
    inc: incAC,
    dec: decAC
};
const ConnectedCounter = connect(mapStateToPropsCounter, actions)(Counter);

const App = () => {
    return (
        <React.Fragment>
            <ConnectedTitle />
            <ConnectedCounter />
        </React.Fragment>
    );
};

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);