import PropTypes from 'prop-types'

function Student(props){


    return(
        <div className="student">
            <p>Name:{props.name}</p>
            <p>age:{props.age}</p>
            <p>student:{props.isStudent ? "YES":"NO"}</p>
                
        </div>


    );

}

Student.propTypes={
    name: PropTypes.string,// ensires that stirng is only stirng while accepting props
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}
Student.defaultProps={
    name:"Guest",
    age : 0,
    isStudent:false,

}

export default Student