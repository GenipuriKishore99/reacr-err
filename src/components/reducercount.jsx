import { useReducer } from "react";

const initialstate={count:0};
function reducer(state,action){
    switch(action.type){
        case "Join":
            return {count:state.count+1}
        case "Exit":
            return {count:state.count-1}
    }

}
export const ReducerCount=()=>{
    const [state,dispatch]=useReducer(reducer,initialstate)

    const handlerCount=()=>{
        dispatch({type:"Join"})
    }
    const handlerExit=()=>{
        dispatch({type:"Exit"})
    }
    return(
        <div>
            <div className="bg-dark p-4 m-3">
                <h5 className="text-white">Buffering Vodeos......!</h5>

            </div>
            <div>
            <p>Live Streaming:{state.count}</p>
                <button className="btn btn-primary m-3"  onClick={handlerCount}>Join</button>
                
                <button className="btn btn-danger" onClick={handlerExit} >Exit</button>

            </div>

        </div>
    )
}