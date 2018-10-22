function fun() {
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

// Let us define an object A
myObjectA = {
  a: 1,
  fun
};

// Adding a new property to object A
// and binding the function "fun" to object A
myObjectA.fun_bound = fun.bind(myObjectA);

console.log(`myObjectA: ${pretty(myObjectA)}`);
console.log(`myObjectA.fun(): ${pretty(myObjectA.fun())}`);
console.log(`myObjectA.fun_bound(): ${pretty(myObjectA.fun_bound())}`);

// Let us define an object B
myObjectB = {
  a: 2,
  fun: myObjectA.fun,
  fun_bound: myObjectA.fun_bound
};

console.log(`\nmyObjectB: ${pretty(myObjectB)}`);
console.log(`myObjectB.fun(): ${pretty(myObjectB.fun())}`);
console.log(`myObjectB.fun_bound(): ${pretty(myObjectB.fun_bound())}`);
