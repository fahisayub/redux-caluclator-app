import { ADD, DECREMENT, DIVIDE, INCREMENT, MULTIPLY, SUBSTRACT } from "./action.type"

export const increment =()=>({type:INCREMENT,});
export const decrement=()=>({type:DECREMENT,});
export const add=(payload)=>({type:ADD,payload});
export const substract=(payload)=>({type:SUBSTRACT,payload});
export const multiply=(payload)=>({type:MULTIPLY,payload});
export const divide=(payload)=>({type:DIVIDE,payload});
