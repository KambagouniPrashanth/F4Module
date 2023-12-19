import { DECREASE, INCREASE,RESET } from "../action/actionTypes.js"
// import * as obj from "../actions/actionTypes.js"
//logic present in the reducer folder
let intitalState = {count:0,a:1,b:2}
//step3

const counterReducer = (state=intitalState, action) =>{
      //copy data of intialState obj and updating the count values

    switch(action.type){
         case INCREASE: 
               return {...state, count: state.count+action.value }

         case DECREASE: 
                return {...state, count: state.count  - 1}
         case RESET:
               return intitalState
        default: 
             return state
    }
   
}






export default counterReducer