"use strict";

const myarray = ["react", "angular", "vue"];

// with a regular function
let MYARRAY = myarray.map(function(element) {
  return element.toUpperCase();
});
console.log(MYARRAY);

// with an arrow function
MYARRAY = myarray.map(element => element.toUpperCase());
console.log(MYARRAY);
