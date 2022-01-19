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


//The THIS keyword

This keyword/variable

- Special variable that is created for every execution context (every function).

- Takes the value of the "owner" of the function in which the this keyword is used.

- This is not static. Depends on how the function is called.

Method - this = object that is calling the method

Simple function call - this = undefined

Arrow functions - this = this of surrounding function (parent)

Event listener - this = DOM element that the handler is attached to.

- This does not point to the function itself, and also not the its variable environment.

// Primitives, Objects, and The Javascript Engine

Primitives 
- Number, String, Boolean, Undefined, Null, Symbol, BigInt
- Stored in Call Stack
- Primitives create new address with new value when placed in the call stack


Objects 
- Object literal, Arrays, Functions, etc.
- Stored in Heap
- Objects create new address but the value is referenced in the Heap, which holds the value.

- So when using a 2nd object to reference to the 1st object, changing the value would also affect the 1st, or all of the objects that holds the same because no new address is created, the value of the object that is pointed in the heap is the one being changed.

- Even if defined in const, the value can still be changed.










*/
