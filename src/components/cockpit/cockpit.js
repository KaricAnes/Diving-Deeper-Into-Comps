import React, { useEffect, useRef } from 'react';
//import classes from cockpit.css;

const Cockpit = props => {


  const  removeCockpitRef = useRef(null);





 useEffect(() => {

console.log('[cockpit.js] useEffect');
//Http request

//fake http request
//Slicno sam radio u Jqueriju, nakon jedne sekunde ce se desiti sta treba

/*const timer = setTimeout(() => {
   

alert('Saved data to cloud!');
}, 1000);
//ovo je za clean up
//Ovo ce se okidati poslije svakog rendera
//Da budemo precizniji, runa se prije main useEffect funkcije, ali poslije prvog rendera
*/


/*removeCockpitRef.current.click();*/



return () => {
  /* clearTimeout(timer);*/
console.log('Cockpit.js clean up work with use effect');

};
}, []);







useEffect(() => {
   console.log('[cockpit.js]2nd useEffect');

   return () => {
      console.log('Cockpit.js clean up work with 2nd useEffect');


};

}
);




    


return(

<div>

<h4>Nisam ni znao da je ovako lahko prikazati sadrzaj neki</h4>

 <p> classname zavisi od broja objekata u pocetnom state-u</p>

 <p> Naslov aplikacije je : {props.title}</p>


  <button ref = {removeCockpitRef}  onClick = {props.togara}>Toggle Persons</button>

  <button onClick = {props.login}>Log in/ Log Out</button>

   </div>

);





};


export default React.memo(Cockpit);