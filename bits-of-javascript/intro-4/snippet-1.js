"use strict";

function fun_1() {
  console.log("Hello arrow functions");
}

function fun_2(text) {
  console.log(text);
}

const fun_arrow_1 = () => console.log("Hello arrow functions");
const fun_arrow_2 = text => console.log(text);

const text = "Hello arrow functions";
fun_1();
fun_2(text);
fun_arrow_1();
fun_arrow_2(text);
