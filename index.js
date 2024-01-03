"use strict";

/*******************this in global space***********************/
console.log(this); //globalObject
// global object in browsers is window
// global object in node js is global

/*******************this inside a function***********************/

function x() {
  // the value depend on strict / non strict mode
  // if strict mode this = undefined, non strict mode this = window/glo0bal object
  // conclusion: this keyword value is undefine inside a function
  console.log(this);
}
x(); // undefined (in strict mode)

/*******************this in non strict mode - (this substitution)***********************/
// if the value of this keyword is undefined or null then this keyword
// will be replaced with globalObject only in non strict mode

/*******************this keyword value depends on how this is called (window)***********************/
window.x(); // window object (in both strict and non strict modes)

/*******************this keyword inside an object's method***********************/
//a function which wrote as a part of an object is called a "method"
// below x is the method inside the object obj
const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};
obj.x(); // the values of this keyword is the object obj.

const obj2 = {
  a: 20,
};

/*******************call apply bind methods (sharing methods)***********************/
// if we want share printName (of student1) with student2, we can use call, apply or bind methods

const student = {
  name: "Ruzbihan",
  printName: function () {
    console.log(this.name); //this refers to student
  },
};
student.printName(); // prints Ruzbihan

const student2 = {
  name: "John",
};

student.printName.call(student2); //value of this = student2. Prints John

/*******************this keyword inside arrow function***********************/
//arrow functions does not have their own this value
// they will take the value from their lexical context
const arrowFn = {
  a: 10,
  x: () => {
    console.log("Arrow Fn", this);
  },
};
arrowFn.x(); //this behave likes it presents in the global space

/*******************this keyword inside nested arrow function***********************/
const arrowFn2 = {
  a: 20,
  x: function () {
    // enclosing lexical context
    const y = () => {
      console.log("Arrow Fn2", this);
    };
    y();
  },
};
arrowFn2.x(); //now the arrow Fn is not in the global scope. It is inside a fn.
// so its lexical scope is the function x.

/*******************this inside DOM***********************/
// the this keyword value is reference to the HTML element
