import React,{useState} from "react";

function Colorpicker(){

    const [color,setColor]=useState('#FFFFFFF')

    function handlecolorchange(event){
        setColor(event.target.value)
    }
    return (

        <div className="Colorpicker">
            <h1>color picker
                <div className="color-display" style={{backgroundColor:color}}>
                    <p>selected color :{color}</p>
                </div>
                <label>select a Color</label>
                <input type="color" value={color} onChange={handlecolorchange}></input>
            </h1>
        </div>


        


    );
}

export default Colorpicker