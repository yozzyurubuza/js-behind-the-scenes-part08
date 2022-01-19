'use strict';

//A High-level Overview of Javascript

/*
Low-level - Developers has to manage resources manually

High-level (JS, Python) - Developers does not have to worry, everything happens automatically

Garbage-collection - Cleaning the memory so we don't have to manually.

Interpreted / Just-in-time compiled - 

Abstraction - Converted from machine code to human-readable code.


Multi-paradigm - Javascript can become any of the paradigm below.

Procedural Programming - linear way of coding

Object-Oriented Programming (OOP) - 

Functional Programming (FP) - 

First-class functions - Simply treated as variables, can pass functions into other functions.

Dynamic - No data type definitions, it is automatically changed whenever needed.

Single-threaded - JS runs in one single thread, so it can only do one thing at a time.

Concurrency Model - JS handles multiples tasks happening at the same time


//The Javascript Engine and Runtime

Javascript Engine - A program that executes JS code

Ex. V8 Engine -> Google Chrome / Node JS

Call Stack - Where our code is executed

Heap - Where objects are stored


Compilation vs Interpretation

Compilation - Entire code is converted into machine code and written to a binary file that can be executed by a computer

Interpretation - runs through the source code and executes it line by line.

Just-In-Time Compilation - Entire code is converted and executed immediately. 

Optimization happens during execution but does not stop the program


//Execution Contexts and the Call Stack

Execution Context 
- Environment in which a piece of JS is executed. Stores all the necessary info for some code to be executed.
- Contains let, const, var, functions, scope chain, this keyword
- Arrow functions has no this keyword and argument objects.

Call Stack - place where execution contexts get stacked on top of each other, to keep track of where we are in the execution, like a map.


//Scope and The Scope Chain

Scoping - Where can we access a certain variable, and where not?

Lexical Scoping 

- Scoping is controlled by placement of functions and blocks in the code
- Nested function B inside function A has access to the variables of function A.

Scope - Environment in which a certain variable is declared.

Scope of a variable - region of our code where a certain variable can be accessed.


Global Scope 

- outside of any function or block 
- accessible everywhere

Function Scope 

- accessible only inside function
- also called local scope  

Block Scope 

- Variables are accessible only inside block (if, while, for)
- Only let and const variables, var is only function scope.

Scope Chain

- Scope has access to all variables from all outer scopes.
- Scope chain can only look up. (Parent cannot access child scopes).

//Hoisting in Javascript

Hoisting

- Makes some types of variables accessible / usable in the code before they are actually declared.

- Variable lifted to the top of their scope.

Temporal Dead Zone - Cannot be used before initialization, even if the code is in the same scope.















*/
