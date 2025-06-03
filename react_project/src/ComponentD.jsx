import React,{useState,useEffect,useContext} from "react";
import { usercontext } from "./ComponentA";

function ContextD(){

    const user =useContext(usercontext);

    return (<div className="box">
        <h1>ComponentD</h1>
        <h2>{  `bye ${user} `}</h2>

    </div>);
    


}

export default ContextD