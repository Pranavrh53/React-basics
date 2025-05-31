
import React,{useState} from "react"

function Counter(){
    const [count,setcount]=useState(0);

    const increment=()=>{

        setcount(count+1);
    }

    const decrement=()=>{

        setcount(count-1);
    }

    const reset=()=>{
        setcount(0);
    }

    return(

        <div className="counter-container">

            <p className="counter-display">{count}</p>
            <button className="counter-button" onClick={decrement}>decrease</button>
            <button className="counter-button" onClick={increment}>increase</button>
            <button className="counter-button" onClick={reset}>reset</button>
        </div>
    )


}

export default Counter