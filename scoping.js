'use strict';

//Scoping in Practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // function scope
      const firstName = 'Steven'; // JS will use this and not perform scope look up. Declaring the same variable name but different scope will not produce an error.

      output = 'NEW OUTPUT'; // Can manipulate variables from parent scope.

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    //console.log(add(2, 3)); Function is also block scope
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
