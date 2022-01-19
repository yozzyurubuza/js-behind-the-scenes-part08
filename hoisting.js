'use strict';

//Hoisting in Practice

//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // Cannot Access before initialization
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

//Const and Let has Temporal Dead Zone
//Changing it to var will just give undefined
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart(); //var is undefined, so the function will trigger.

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
