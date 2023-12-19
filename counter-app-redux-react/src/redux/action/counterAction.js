import { INCREASE, DECREASE, RESET } from "./actionTypes.js";

// INCREASE ACTION:
//step2
export const increase =  (value=1) => {
    return(
        {
            type: INCREASE,
            value: value

        }
    )
}

// DECREASE: 

export const decrease = () =>{
    return(
        {
            type: DECREASE
        }
    )
}

//RESET 

export const reset = () =>{
    return(
        {
            type: RESET
        }
    )
}