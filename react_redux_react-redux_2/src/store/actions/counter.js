import { decAT, incAT } from "../action-types/counter";

// Action creates
const incAC = () => ({ type: incAT });
const decAC = () => ({ type: decAT });  

export {
    incAC as inc,
    decAC as dec,
};