import React, {Component} from 'react';

import Verson from './Person/Person';

import Verson2 from './Person/Person2';

//Persons uhvatimo preko propsa, a onda oh mapiramo u array of JSX Elements

class Osobe extends Component{ 


        

//-------------------------------------------------#########################        
//1) u procesu updajtovanja

static getDerivedStateFromProps(props, state){

console.log('[Osobe.js]  getDerivedStateFromProps  ');
return state;

}

//---------------------------------------------------------------------------

//-------------------------------------------------######################### 

//2)  shouldComponentUpdate

shouldComponentUpdate(nextProps, nextState){
        console.log('[Osobe.js] shouldComponentUpdate  ')

        //Po nama treba da se updajtuje jer smo setali na true
        //Inace ovo je sada hardZakodirano i nije bas korsino
//Inace napravimo neki uslov pa poredimo da li cemo updajtovati ili ne

        if(nextProps.persons !== this.props.persons ||
           nextProps.changed !== this.props.changed ||
           nextProps.clicked !== this.props.clicked  )     
                {

         return true;

       }
        else {
                return false;
        }



}

//------------------------------------------------------------------------------


//---------------------------------#######################################
//3) getSnapshotBeforeUpdate

getSnapshotBeforeUpdate(prevProps, prevState){

console.log('[Osobe.js] getSnapshotBeforeUpdate');
return {message: 'Snapshot'};

}

//------------------------------------------------------------------------


//-------------------------------------#########################################
//4)

componentDidUpdate(prevProps, prevState, snapshot){

console.log('[Osobe.js] componentDidUpdate');
console.log(snapshot);

}


//----------------------------------------------------------------------------


//----------------------------------------------£££££££££££££££££££££££££££££££££££££££££

componentWillUnmount() {

console.log('[Osobe.js] componentWillUnmount')

}


//-----------------------------------------------------------------------------------

 render(){

                console.log('[Osobe.js] rendering');

                return this.props.persons.map((x, index) => {

                        return(
                                <div>
                         <Verson
                                click = {() => this.props.clicked(index)}
                                changed = {(event) => this.props.changed(event, x.id)}
                                name = {x.name}
                                age = {x.age}
                                key = {x.id}
                                //zato sto je klasna komp, mora biti this
                                isAuth = {this.props.isLoggedIn} /> 


                         </div>
                        )
                  
                         });


                         
                  







        }

        

       
}


         export default Osobe;