import { useEffect, useState } from "react"

export const Counter=()=>{
    const [count,setCount]=useState(0);
    const [isValid,setIsValid]=useState(true)

    // const handler=()=>{
    //     setCount(count+1)
    // }

    useEffect(()=>{
        var valid;
        if(isValid){
            valid= setInterval(()=>{
                setCount(count=>count+1)
    
            },1000)
        }
        return()=>{
            clearInterval(valid)
        }
       
    },[isValid])


    function handler(){
        setIsValid(false)
    }


    return(
        <div>
            {/* <button className="btn btn-primary" onClick={()=>{handler()}} disabled={count===10} >Increment</button> */}
            <p>count:{count}</p>
            <button onClick={handler} className="btn  btn-danger">StopCounter</button>

        </div>
    )
}