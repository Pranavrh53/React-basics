function Profilepic(){

    const imgurl='./src/assets/lol.jpg';

    const handleclick=(e)=>e.target.style.display="none";



    return(<img  onClick={(e)=>handleclick()} src={imgurl}></img>);

}

export default Profilepic