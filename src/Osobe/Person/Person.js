import React, {Component} from 'react';
import './Person.css';
import Radium  from 'radium';
import Auxic from '../../hoc/Auxilary';

import PropTypes from 'prop-types';





class Person extends Component {


   constructor(props)  {
      super(props);

      this.inputElemenaatRef = React.createRef();


   }

   
componentDidMount(){

//this.inputElemenaat.focus();
this.inputElemenaatRef.current.focus();
//document.getElementById(this.props.key = 'abc1');

}




   render(){

   console.log('[Person.js] rendering...');




   return (
      
      <Auxic>
           
       {this.props.isAuth ? <p>Log Out</p> : <p>Log In</p>}


      
      <h1 key = "i1" onClick = {this.props.click}>I am {this.props.name}</h1>
      
       <h3 key = "i2" onClick = {this.props.click}>My age is: {this.props.age} years</h3>
      
        <h5 key = "i3">{this.props.children}</h5>
      
         <input
          key = "i4"

          // ref= {(inputEl) => {this.inputElemenaat = inputEl}}
          ref = {this.inputElemenaatRef}

           type = "text"
            onChange = {this.props.changed}
             value = {this.props.name} />
      
         </Auxic>
      
   );
      


   }

   











}


Person.propTypes = {

   click: PropTypes.func,
   name: PropTypes.string,
   age: PropTypes.number,
   changed: PropTypes.func
   

};






 export default Radium(Person);