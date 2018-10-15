function funA() {
  return this;
}

function funB() {
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

console.log(`\nmyObject: ${pretty(myObject)}`);

console.log(`\nfunA(): ${funA()}`);
console.log(`myObject.funA(): ${pretty(myObject.funA())}`);

try {
  funB();
} catch (error) {
  console.log(`\nfunB(): ${error.message}`);
}
console.log(`myObject.funB(): ${myObject.funB()}`);
