import PropTypes from 'prop-types'

function UserGreeting(props){

    const true1= <h2 className="true">
                 welcome {props.username}
                 </h2>

    const false1= <h2 className="false">
                  please login
                  </h2>
       

       return props.isloggedin ? true1:false1;

    //    using const
            


    // {/* return(props.isloggedin ? <h2 className="true1">welcome {props.username}</h2>: 
    //                           <h2 className="false1">please login</h2>); */}

   // using ternary operator
}


UserGreeting.Proptypes={

    isloggedin:PropTypes.bool,
    username:PropTypes.string, // used to throw error is wrong datatyoe is enterd


}

UserGreeting.defaultProps={
    isloggedin:false,
    username:"guest",
}



export default UserGreeting