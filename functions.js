'use strict';

//Regular Functions vs Arrow Functions

var firstName = 'Matilda';

const jonas = {
  //Not a code block, so arrow function did not get the firstName
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    // const self = this; //this = jonas method
    // //Regular function inside method is still undefined
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2 - Arrow function inherits "this" from parent function - which is calcAge, then calcAge gets "this" from jonas.
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
    // Arrow Function does not get this keyword from object jonas, but from it's parent instead (global).
  },
};

jonas.greet();
jonas.calcAge();

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

//Arguments does not exist in Arrow Functions
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
