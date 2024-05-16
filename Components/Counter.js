import {useState} from "react";
var count=0;
const Counter=()=>{
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
        //console.log(count);
    }
    const decrement=()=>{
        setCount(count-1);
        //console.log(count);
    }
    return(
        <>
            <button onClick={increment}>increment</button>
            {count}
            <button onClick={decrement}>decrement</button>
        </>
    );
}
export default Counter;