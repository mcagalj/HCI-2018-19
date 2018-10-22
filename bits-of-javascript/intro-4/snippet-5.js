"use strict";

// Higher-order Functions (HoF): functions that operate
// on other functions, as arguments or by returning them.

// This function demonstrates HoF and JS "closure"
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const multiply_by_4 = multiply(4);
const myarray = [2, 3, 4, 5, 6];

console.log("\nMultiply by 4");
for (const i in myarray) {
  console.log(`${myarray[i]} => ${multiply_by_4(myarray[i])}`);
}

// Using arrow functions
const multiply_arrow = a => b => a * b;
const multiply_by_5 = multiply_arrow(5);

console.log("\nMultiply by 5");
for (const i in myarray) {
  console.log(`${myarray[i]} => ${multiply_by_5(myarray[i])}`);
}
