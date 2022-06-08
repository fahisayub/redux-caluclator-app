import React,{useRef} from "react";
import {useDispatch,useSelector} from 'react-redux';
import {increment,decrement,add,multiply,substract,divide} from '../Redux/action';
const Calculator = () => {
    const dispatch=useDispatch();
    const ref=useRef()
    const result=useSelector((state)=>state.value)
    console.log(result);
    const inputfn=()=>{

    let input=ref.current.value;
    console.log(input);
    return Number(input);
    }

  return (
    <div>
      <div>{result}</div>
      <br />
      <button onClick={()=>(dispatch(increment()))}>Increment</button>
      <br />
      <button onClick={()=>(dispatch(decrement()))}>Decrement</button>
      <br />
      <input type="number" ref={ref} placeholder="Value" />
      <div>
        <button onClick={()=>(dispatch(add({value:inputfn()})))}>Add</button>
        <button onClick={()=>(dispatch(multiply({value:inputfn()})))}>Multiply</button>
        <br />
        <button onClick={()=>(dispatch(substract({value:inputfn()})))}>Substract</button>
        <button onClick={()=>(dispatch(divide({value:inputfn()})))}>Divide</button>
      </div>
    </div>
  );
};

export default Calculator;
