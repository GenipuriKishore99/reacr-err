import { useState } from "react"

export const useCounter=(init)=>{
    const [count,setCount]=useState(init=0);
    console.log("two")
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(init)
    }
    return({count,increment,decrement,reset})
}