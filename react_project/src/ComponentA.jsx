import React,{useState,useEffect,createContext} from "react";
import ContextB from "./ComponentB";
export const usercontext = createContext();
function ContextA(){

    const [user,setuser]= useState("brocode");

    return (<div className="box">
        <h1>ComponentA</h1>
        <h2>{`hello ${user}`}</h2>
        <usercontext.Provider value={user}>
            <ContextB user={user}/>

        </usercontext.Provider>
        <br></br>
        

    </div>);
    


}

export default ContextA