import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Profilepic from './Profilepic.jsx'
import Mycomponent from './Mycomponent.jsx';
import Counter from './Counter.jsx';
import Lol from './Lol.jsx';
import Colorpicker from './Colorpicker.jsx';
import Array from './Array.jsx';


function App() {

  return(
    <>
     <Button/>
     
    
  

   
   
    <Card></Card>
    <Card></Card>
    <List></List>
   
    
    
    <Header></Header>
    <Food></Food>
 
    
    <Student name="Pranav" age="30" isstudent={true}></Student>
    <Student name="prh" age={34} isstudent={false}></Student>
    <Student name="eren" age={20} isstudent={true}></Student>
    <Student></Student>

    <UserGreeting isloggedin={true} username="pranav"></UserGreeting>

    <Profilepic></Profilepic>
     <Counter/>
     <Mycomponent />

     <Lol/>
     <Colorpicker></Colorpicker>

     <Array/>
    



    
    <Footer></Footer>


    
    

  
    </>
    
    
  );

  
}

export default App
