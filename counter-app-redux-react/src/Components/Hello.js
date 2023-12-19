import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import {increase, decrease, reset} from "../redux/action/counterAction"


// getState  function => useSelector
// dispatch => use Dispatch

const Hello = ()=>{
    let {count} = useSelector(state=>state)
    const dispatch = useDispatch()

    //    let {count,a,b} = obj

    function inc(){
         dispatch(increase(50))
    }
    function dec(){
        dispatch(decrease(20))

    }

    return(
        <div>
             <h1> {count} </h1>
             <button onClick={inc}> Increase </button>
             {/* <button onClick={dec}> Decrease </button> */}

             <button onClick={()=>dispatch(decrease())}> Decrease </button>
             <button onClick={()=>dispatch(reset())}> Reset </button>
             
        </div>
    )
}

export default Hello
