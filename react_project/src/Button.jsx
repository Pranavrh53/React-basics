

function Button(){

    let count=0;

    const handleclick=(name)=>{
        if(count<3){
            count++;
            console.log(`${name} you clicked me  ${count} times   ` );

        }else{
            console.log(`${name} stop clicking me `);
        }
    };
//e.target.textContent used to the change the text of the button
    const handleclick3=(e)=>e.target.textContent="ouch";
    // defining all the propeeties of the evenet taking place when cliking the button

    // const handleclick2=(name)=> console.log(`${name} stop clicking me `);

    const styles={
        
            backgroundColor:" rgb(28, 20, 173)",
            borderRadius: "5px ",
            fontStyle: "oblique",
            cursor: "pointer",
            height: "50px",
            width:"100px",// javascript no spaces and and should end with commas and should be coated with inverted commas
          
        
    }

    

    return(
        <button onClick={(e)=>handleclick3(e)}>CLICK ME </button>


    );
    // onDoubleClick is used to execute the function after 2 clicks 


}

export default Button