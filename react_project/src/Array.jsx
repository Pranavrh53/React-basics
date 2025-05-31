import React, {useState} from "react";

function Array(){

    const[foods,setFoods] =useState(["apple","orange","banana"]);

    function AddFood(){

        const newfood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value="";

        setFoods([...foods,newfood]);


    }

    function RemoveFood(){
        const remove= document.getElementById("foodinput").value.trim();
        setFoods(foods.filter((food)=>food!= remove));
        document.getElementById("foodinput").value="";

    }


    return (<div>
        <h2>list of food</h2>
        <ul>{foods.map((food,index)=>
            <li key={index} 
            >{food}
        </li>)}

        </ul>
        <input type="text" id="foodinput" placeholder="enterfoodname"></input>
        <button onClick={AddFood}>add food</button>
        <button onClick={RemoveFood}>remove</button>

    </div>
    );

}

export default Array