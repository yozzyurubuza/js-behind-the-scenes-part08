'use strict';
/*

let age = 30;
let oldAge = age;

age = 31;

console.log(age);
console.log(oldAge);

//Both age of the objects changed to 27, even if only friend.age was declared to become 27.
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend: ', friend);
console.log('Me:  ', me);

*/

// Primitives vs Objects in Practice

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

//Both objects exactly points in the same reference in the Heap
//When changing the value in the Heap, let and const has nothing to do with it.
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage: ', jessica);
console.log('After Marriage: ', marriedJessica);

// marriedJessica = {} //Will not work because we cannot change the value in the Call Stack.

// Copying Objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice, Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
//Create new object
//Copies only the 1st level of object, nested object not included.
//Deep cloning is needed to copy including the nested objects.

jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Marriage: ', jessica2);
console.log('After Marriage: ', jessicaCopy);
