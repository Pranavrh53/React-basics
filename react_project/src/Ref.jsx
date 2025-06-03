 import React,{useState, useEffect,useRef } from "react"
 function Ref (){
    const ref= useRef(0);

    


    useEffect(()=>{
        console.log("COMPONENT REDENRED ")

    });

    function handleclick(){
        ref.current ++;

        console.log(ref.current);

    }

    return(<div>
        <button onClick={handleclick}>
            click me
        </button>


    
    
    </div>);


 }

 export default Ref