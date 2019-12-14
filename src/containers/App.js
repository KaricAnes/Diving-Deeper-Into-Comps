//Cilj je iamti definisanu metodu unutar klasne pametne komponente i onda je 
//korsititi u skroz drugoj komponennti koja je glupa

import React, { Component } from 'react';

//import Verson from '../Osobe/Person/Person';

import Kersons from '../Osobe/Osobe.js';

import Radium, {StyleRoot} from 'radium';

import './App.css';

import Error from '../ErrorBoundary/ErrorBoundary';

import Cockpit from '../components/cockpit/cockpit';

import PicicWithClass from '../hoc/WithClass';

import Logara from '../context/auth-context';
import authContext from '../context/auth-context';









class App extends Component {

  //1) constructor

constructor(props){

  super(props);
  console.log('[App.js] constructor');

}









  //state pocetni i jedini---------------------------------------------------------------------######
state = {

persons: [

{id: 'abc1', name : "Arius", age: 28},
{id: 'abc2', name : "Anes", age: 23},
{id: 'abc3', name : "Safet", age: 21}


],

persons2: [
  {id: 'abc2', name : "Anes", age: 23},
  {id: 'abc3', name : "Safet", age: 21}

],

otherState: 'someValue',
//Ovo smo namjerno settali na false
showPersons: true,
showCockpit:true,
changeCounter:0,
login:false
}
//state pocetni ----------------------------------------------------------------------------------



//----------------------------------------------------#########################################



//2)  getDerivedStateFromProps()

 static getDerivedStateFromProps(props, state) {

  console.log('[App.js] getDerivedStateFromProps', props);
  return state;

}




//-----------------------------------------------------------------------------------------




//-------------------------------------------------------------------###########################


componentDidMount(){

console.log('[App.js] componentDidMount');

}



//-------------------------------------------------------------------###########################







//-----------------------------------#################

//ovo dodajemo za update STATE-a

shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate');
  //uvijek mora nesto vracati
  return true;
}



componentDidUpdate() {

console.log('[App.js] componentDidUpdate')

}


//------------------------------------------------------


//*************************   Login     ******************************************/

loginHandler = () =>{

const isLoggedIn = this.state.login;
this.setState({login: !isLoggedIn});

//this.setState({login: true})
}

//--------------------------------------------------------------------







//Funkcija promijenjenoIme ------------------------------------------------------------###########


promijenjenoIme = (event, b) =>  {


//novi kod za two way binding---------------------------####@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//Ovo ispod trazi index osobe koja nam treba
const IndexOsobe = this.state.persons.findIndex(i => {

  //Ovo ispod vraca true ili false, da li smo potrefili ono sto zelimo
  //dakle da li se podudaraju id-evi
  //ako se podudaraju, onda se u IndexOsobe spasi index tog objekta
return i.id === b;


});



const roki = {
  ...this.state.persons[IndexOsobe]

};

roki.name = event.target.value;


const licnosti = [...this.state.persons];
licnosti[IndexOsobe] = roki;


//const roki2 = Object.assign({}, this.state.persons[IndexOsobe])
//alternativa rokiju

//novi kod za two way binding-------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






  this.setState( (prevState, props) => {
    return{
     persons:licnosti,
      changeCounter: prevState + 1
    };
    })
   
  

};

//Funkcija promijenjenoIme ------------------------------------------------------------











//Funkcija togglePersonsHandler ------------------------------------------#######################

togglePersonsHandler = () => {

const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});


}


//Funkcija togglePersonsHandler ---------------------------------------------------------------
//Zelimo da uklonimo objeakt iz naseg arraya kada kliknemo na paragraf


deletePersonHandler = (personIndex) => {

const narod = [...this.state.persons];
narod.splice(personIndex, 1);

this.setState({persons: narod});

}










//3) Render metoda


  render(){

console.log('[App.js] render');


//Inline styling ---------------------

const style = {

  backgroundColor: 'green',
  color: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer',
  //radius majka - paket
  ':hover': {

    backgroundColor: 'lightgreen',
    color: 'black'

  }
  
  
  
  };
  //Inline styling ---------------------







let osobe = null;

//Ako je ovo true
if (this.state.showPersons){

  //4) Child Components 

  osobe =  <Kersons
      persons = {this.state.persons}
      clicked = {this.deletePersonHandler}
      changed = {this.promijenjenoIme}
      changed2 = {this.promijenjenoIme}
      isLoggedIn = {this.state.login}/>;
    
}



//-----------------------------------------------------------
  return (
//4) Child Components 
<StyleRoot>

  <div className="App">
    
    <button
     onClick = {() => {this.setState({showCockpit:false})}}
     >
     Remove Cockpit
     </button>

<authContext.Provider>

{this.state.showCockpit ? (
   
<Cockpit

//showPersons = {this.state.showPersons}
persons = {this.state.persons}
title = {this.props.appTitle}
togara = {this.togglePersonsHandler}
login = {this.loginHandler}


/> 
): null   }



{osobe}
</authContext.Provider>
 
 </div>
 </StyleRoot>
  );
  
  }
}



export default Radium(App);
