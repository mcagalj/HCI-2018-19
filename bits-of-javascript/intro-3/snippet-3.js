function funA() {
  return this;
}

function funB() {
  return this.a;
}

function funC() {
  "use strict";
  return this.a;
}

// a simple helper function
function pretty(json) {
  return JSON.stringify(
    json,
    (_, value) => {
      if (typeof value === "function") {
        return value.name;
      }
      return value;
    },
    2
  );
}

// Let us define an object
myObject = {
  a: 1,
  b: 2,
  funA, // shorthand for funA: funA
  funB
};

// Let us also define a global variable
if (typeof window !== "undefined" && window) {
  window.a = 10;
} else {
  global.a = 10;
}

console.log(`\nfunA(): ${funA()}`);
console.log(`funA.call(myObject): ${pretty(funA.call(myObject))}`);

console.log(`\nfunB(): ${funB()}`);
console.log(`funB.call(myObject): ${pretty(funB.call(myObject))}`);

try {
  funC();
} catch (error) {
  console.log(`\nfunC(): ${error.message}`);
}
console.log(`funC.call(myObject): ${pretty(funC.call(myObject))}`);
