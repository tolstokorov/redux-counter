import { createStore, combineReducers } from "redux";
import counter from "../store/redusers/counter";

const store = createStore(combineReducers({
    counter
}));
export default store;