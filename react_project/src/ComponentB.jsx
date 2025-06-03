import React,{useState,useEffect,useContext} from "react";
import ContextC from "./ComponentC";

import { usercontext } from "./ComponentA";
function ContextB(){

    const lol = useContext(usercontext);

    return (<div className="box">
        <h1>ComponentB</h1>
        <h2>{  `wtf ${lol}`}</h2>
        <ContextC ></ContextC>

    </div>);
    


}

export default ContextB