'use strict';

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
