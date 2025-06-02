import React,{useState,useEffect} from "react";

function Dimension(){

    const [width,setwidth]= useState(window.innerWidth);
    const [height,setheight]= useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleresize);

    console.log("event listener added");

    },[]);


    function handleresize(){
        setwidth(window.innerWidth);
        setheight(window.innerHeight);
    }


    return (<>
    <p>window width:{width}px</p>
    <p>windoe height:{height}px</p>

    
    </>);


}

export default Dimension