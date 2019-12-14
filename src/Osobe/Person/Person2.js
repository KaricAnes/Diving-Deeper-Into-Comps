import React, {Component} from 'react';
import './Person.css';
import Radium  from 'radium';
import Auxic from '../../hoc/Auxilary';

import PropTypes from 'prop-types';





class Person2 extends Component {


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
      
      <h1 key = "i1" onClick = {this.props.click}>I am {this.props.name}</h1>
      
       
      
       
      
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


Person2.propTypes = {

   click: PropTypes.func,
   name: PropTypes.string,
   age: PropTypes.number,
   changed: PropTypes.func
   

};






 export default Radium(Person2);