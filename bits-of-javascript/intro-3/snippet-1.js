// this points to the Global/Window object
function funA() {
  return this;
}

// in strict mode, this is undefined
function funB() {
  "use strict";
  return this;
}

console.log(`funA(): ${funA()}`);
console.log(`funB(): ${funB()}`);
