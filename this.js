'use strict';

//The THIS Keyword in Practice

console.log(this); // Window Object

//Regular function = undefined
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

//Arrow function = window object / parent function
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

//Method = jonas object
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge(1991);

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; //Method borrowing
matilda.calcAge(); //this.year points to matilda year

const f = jonas.calcAge;
f(); //this.year = undefined
