// DATA TYPES IN JS:-

// data types are those, which defines the type of data.
// we have two types of Data-
// *primitive:-Primitive Datatypes are immutable. They cannot be changed. If we change the value of a primitive datatype, it will create a new value in the memory.

// we have 7 types of primitive data type-

// Number-number can be positive and negative
// Represents both integer and floating-point numbers.
// example:-
// let integer = 42;          // An integer
// let float = 3.14;         // A floating-point number
// console.log(typeof(integer));     // Output: 42
// console.log(typeof(float));       // Output: 3.14

// string:-
// 1. Definition
// A string is a sequence of characters used to represent text in JavaScript. Strings can include letters, numbers, symbols, and whitespace.

// 2. Creating Strings
// You can create strings using:
// Single Quotes: 'Hello'
// Double Quotes: "Hello"
// Backticks (Template Literals): Hello

// A string in JavaScript is a way to represent text.
// It can be made with single quotes ('), double quotes ("), or backticks (`). 
// Strings are like a box that holds letters, numbers, and symbols, and once you create a string, 
// you can’t change its content directly. You can use it to display messages or manipulate text.

// String Immutability:-
// Strings are immutable, meaning once created, their values cannot be changed. Any modification will create a new string.
// example:-
// let text = "  JavaScript is fun!  ";
// console.log(text.trim()); // "JavaScript is fun!"
// console.log(text.toUpperCase()); // "  JAVASCRIPT IS FUN!  "
// console.log(text.split(" ")); // ["", "JavaScript", "is", "fun!", ""]

// let a = "hello"; 
// b=a[4]=12;
// console.log(b)

// keywords are reserved words in javascript. They have special meaning in javascript. They cannot be used as variable names, function names, or any other identifiers.



// Boolean-The Boolean data type in JavaScript represents one of two values: true or false. It is often used in conditional statements to control the flow of the program.
// example:-
// let a = 5;
// let b = 10;
// let isGreater = a > b; // This will be false
// console.log(isGreater); // Output: false

// let a = 5;
// let b = 10;
// let isGreater = a < b; // This will be true
// console.log(isGreater); // Output: true


// null is different from undefined. While both can mean "nothing," null is something you set intentionally, while undefined usually means a variable hasn’t been assigned a value yet.

// undefined-undefined is a special value that indicates that a variable has been declared but has not yet been assigned a value. It essentially means "no value" or "not defined."
// example-
// let a;
// console.log(a)

// Null-ek special value hoti hai
// null is a special value that means "nothing" or "no value."
// It is used when you want to show that a variable doesn't have any meaningful value right now.
// example-
// let x=null;
// console.log(x)
// console.log(typeof x)

// let user = null; // No user is logged in
// console.log(user); // Output: null

// BigInt-
// a=BigInt("123");
// console.log(a)
// console.log(typeof a)

// a=9425235832596843n;
// console.log(typeof a)
 

// Symbol (introduced in ES6):
// Represents a unique and immutable value, often used as keys for object properties.
// Example: let uniqueId = Symbol("id");
// Symbol-
// y=Symbol("hello!")
// console.log(y)
// console.log(typeof y)


// *nonprimitive-Non Primitive Datatypes are mutable. They can be changed. If we change the value of a non primitive datatype, it will not create a new value in the memory.
// example:-Object,array,function,string 

// Object is a collection of key-value pairs. It can store multiple values in a single variable.

// let manoj = {
//     name: "Manoj",
//     age: 30,
//     isMarried: true,
//     role: "QA",
//   };
  
//   let ankush = {
//     name: "Ankush",
//     age: 40,
//     isMarried: true,
//     role: "Manager",
//   };
//   //JSON
//   ankush['role'] = "Software Engineer";
//   // console.log(ankush)
//   //console.log(manoj.role, "This is Manoj's role");
//   //console.log(ankush.role, "This is Ankush's role");
  

// Array:-Array is a collection of data. It can store multiple values in a single variable.
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array[1] = "H";
// console.log(array);

// function:-Function is a block of code that can be reused. It can take parameters and return value it may not return a value.
//parameters are the names listed in the function definition.
//arguments are the real values passed to the function.
// Function Declaration
// function addition(a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
//   }
// //calling a function
// //   console.log(addition(num1, num2, num3),"yhis is a first call");
//   console.log(addition(20, 30, 40),"this is a second call");
//   console.log(addition(30, 40, 50),"this is a third call");



