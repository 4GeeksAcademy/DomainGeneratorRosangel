/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our', 'My', 'Your'];

  let adj = ['bad', 'small', 'Skinny', 'Told'];

  let noun = ['dog', 'dinosaur', 'child', 'Tree'];

  let extension = ['.com', '.es', '.let', '.net'];


  for (let i = 0; i < pronoun.length; i++) {
  for (let a = 0; a < adj.length; a++)  {
  for (let n = 0; n < noun.length; n++)  {
  for (let e = 0; e < extension.length; e++)     
  console.log(pronoun[i] + adj[a] + noun[n] + extension[e]);
  }
  }
  }
  //write your code here
};
