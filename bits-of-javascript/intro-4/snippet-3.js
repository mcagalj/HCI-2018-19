// Arrow functions do not work as object methods
const myObject = {
  name: "myObject",
  fun: function() {
    return this.name;
  },
  fun_arrow: () => this.name // this doesn't work
};

console.log(myObject.fun());
console.log(myObject.fun_arrow());

// Let's redefine the fun_arrow to see
// what the variable "this" points to
myObject.fun_arrow = () => this;
console.log(myObject.fun_arrow());
