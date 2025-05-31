import React, { useState } from 'react';

function Mycomponent() {
  const [name, setName] = useState('Guest');

  const[Age, setAge]=useState(0);

  const[Isemployed, setIsemployes]=useState(false);

  const toggleemployedstatus=()=>{
    setIsemployes(!Isemployed)


  }

  const updateName = () => {
    setName('Spongebob');
  };

  const incrementAge=()=>{
    setAge(Age+1);
  };
  

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>


      <p>Age: {Age}</p>
      <button onClick={incrementAge}>increment Age</button>

      <p>Isemployed: {Isemployed ? "yes":"no"}</p>
      <button onClick={toggleemployedstatus}>toggle status</button>


      
    </div>

    
  );
}

export default Mycomponent;
