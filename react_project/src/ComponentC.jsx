import React,{useState,useEffect,useContext} from "react";
import ContextD from "./ComponentD";
import { usercontext } from "./ComponentA";

function ContextC(){

    const user = useContext(usercontext);

    return (<div className="box">
        <h1>ComponentC</h1>
        <h2>{   `hello again ${user}`}</h2>
        <ContextD></ContextD>

    </div>);
    


}

export default ContextC