// Type conversion in JavaScript refers to the process of converting a value from one data type to another.
// * This can happen implicitly (automatically by the JavaScript engine) or explicitly (when the programmer converts a value).

// Implicit Conversion (Type Coercion):- JavaScript does this automatically.
// For example:
// let num = 5;
// let str = "10";
// let result = num + str; 
// console.log(result)
// console.log(typeof(result))// "510" (num is turned into a string)

// Explicit Conversion: You do this yourself using functions. 
// For example:
// CONVERT STRING TO NUMBER
// let str = "123";
// let num = Number(str); 
// console.log(num)
// console.log(typeof(num))// Now num is 123 (a number)

// let b = "asj"
// console.log(Number(b), "This is a number converted from a string");
// console.log(parseInt(b), "This is a number converted from a string");
// console.log(parseFloat(b), "This is a number converted from a string");
// console.log( +b, "This is a number converted from a string"); // NaN => Not a number

//CONVERT NUMBER TO STRING 
// let a = 123;
// let num = String(a); 
// console.log(num)
// console.log(typeof(num))

// let a = 123
// console.log(typeof String(a), "This is a string converted from a number");
// console.log(typeof a.toString(), "This is a number converted to a string");


// CONVERT BOOLEAN TO STRING
// console.log(typeof(String(true)), "This is a string converted from a boolean");
// console.log(typeof(String(false)), "This is a string converted from a boolean");
// console.log( typeof (2+"2"))

//CONVERT NUMBER TO BOOLEAN vice versa
// let c = 0;
// let d = 1;
// console.log(Boolean(0), "This is a boolean converted from a number");
// console.log(Boolean(1), "This is a boolean converted from a number");
// console.log(Number(true), "This is a number converted from a boolean");
// console.log(Number(false), "This is a number converted from a boolean");


// console.log(Boolean(1));      // Output: true
// console.log(Boolean(0));      // Output: false
// console.log(Boolean("hello")); // Output: true
// console.log(Boolean(""));      // Output: false
// console.log(Boolean(null));    // Output: false