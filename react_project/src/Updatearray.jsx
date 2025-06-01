import React,{useState} from "react";

function Updatearray(){

    const[car,setcar]= useState([]);
    const[caryear,setcaryear]= useState([new Date().getFullYear()]);
    const[carmake,setcarmake]= useState("");
    const[carmodel,setcarmodel]= useState("");


    function addcar(){
        const newcar={year:caryear,
                      make:carmake,
                      model:carmodel};


        setcar(car =>[...car,newcar]); 

        setcaryear(new Date().getFullYear());
        setcarmake("");
        setcarmodel("");    

    }
    function removecar(index){
        setcar(cars=>cars.filter((element,i)=> i!== index));

    }
    function changeyear(event){
        setcaryear(event.target.value)

    }
    function changemake(event){
        setcarmake(event.target.value)

    }
    function changemodel(event){
        setcarmodel(event.target.value)

    }

    return(<div>
    <h2>list of car objects </h2>
    <ul>{car.map((car,index)=> <li key={index} onClick={()=>removecar(index)}>
        {car.year}{car.make}{car.model  }


    </li>)}</ul>
    <input type="number" value={caryear} onChange={changeyear}></input><br/>
    <input type="text" value={carmake} onChange={changemake} placeholder="enter carmake"></input><br/>
    <input type="text" value={carmodel} onChange={changemodel} placeholder="enter model"></input><br/>
    <button onClick={addcar}>add car</button>
    </div>);
}

export default Updatearray;