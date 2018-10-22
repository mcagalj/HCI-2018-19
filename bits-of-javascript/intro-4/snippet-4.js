"use strict";

const myObject = {
  timer_expired: false
};

function fun_1() {
  console.log(`\n[${fun_1.name}] Starting timer`);
  console.log(`[${fun_1.name}] "this" points to:`, this);

  setTimeout(function() {
    this.timer_expired = true;
    console.log(`\n[${fun_1.name}] Timer expired`);
    console.log(`[${fun_1.name}] this == myObject (${this == myObject})`);
    console.log(`[${fun_1.name}] "this" points to:`, this);
  }, 1000);
}

function fun_2() {
  console.log(`\n[${fun_2.name}] Starting timer`);
  console.log(`[${fun_2.name}] "this" points to:`, this);

  setTimeout(() => {
    this.timer_expired = true;
    console.log(`\n[${fun_2.name}] Timer expired`);
    console.log(`[${fun_2.name}] this == myObject (${this == myObject})`);
    console.log(`[${fun_2.name}] "this" points to:`, this);
  }, 2000);
}

function fun_3() {
  console.log(`\n[${fun_3.name}] Starting timer`);
  console.log(`[${fun_3.name}] "this" points to:`, this);

  function callback() {
    this.timer_expired = true;
    console.log(`\n[${fun_3.name}] Timer expired`);
    console.log(`[${fun_3.name}] this == myObject (${this == myObject})`);
    console.log(`[${fun_3.name}] "this" points to:`, this);
  }

  setTimeout(callback.bind(this), 3000);
}

fun_1.call(myObject);
fun_2.call(myObject);
fun_3.call(myObject);
