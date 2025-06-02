import { array, func } from "prop-types";
import React,{useState,useEffect} from "react";

function Useeffecthook(){

    const [count,setcount]= useState(0);

    const[color,setcolor]=useState("green")

    useEffect(()=>{
        document.title = `count:${count}${color}`;// evertime the count value is changed the title of the document also changes

    },[count,color]);

    function addcount(){

        setcount(count=>count+1);

    }

    function subcount(){

        setcount(count=>count-1);

    }

    function changecolor(){
        setcolor(c=>c==="green"  ?"red":"green" );
    }

    return(<>
    <p style={{color:color}}>count:{count}</p>
    <button onClick={addcount}>add</button><br/>
    <button onClick={subcount}>subtract</button><br/>
    <button onClick={changecolor}>change color</button>
    
    
    </>);



}

export default Useeffecthook