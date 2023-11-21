/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "My", "Your"];

  let adj = ["bad", "small", "Skinny", "Told"];

  let noun = ["dog", "dinosaur", "child", "Tree"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++)
        console.log(pronoun[i] + adj[a] + noun[n] + ".com");
    }
  }
  //write your code here
};
