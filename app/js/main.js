/* **************************
VARIABLES
*************************** */
const rootURL = "https://swapi.co/api/";
const wookie = "?format=wookiee";

/* **************************
  DOM VARIABLES
  *************************** */

/* **************************
  FETCH CALLS
  *************************** */

/*
"films": "https://swapi.co/api/films/",
"people": "https://swapi.co/api/people/",
"planets": "https://swapi.co/api/planets/",
"species": "https://swapi.co/api/species/",
"starships": "https://swapi.co/api/starships/",
"vehicles": "https://swapi.co/api/vehicles/"
*/

const fetchAllSections = ( section ) => {
  fetch( `${ rootURL }/${ section }/`, {
    method: "get",
  })
  .then( function( data ) {
    console.log( data );
  })
  .catch( function( error ) {
    console.error( error );
  });
};

fetchAllSections("people");
