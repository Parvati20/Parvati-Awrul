//Hoisting: The declarations are moved to the top of their scope. It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// console.log(a); //usage
/// Reached here and not found this a variable because a is in a temporal dead zone.

// The Temporal Dead Zone (TDZ) is a concept in JavaScript that refers to the period of time during which a variable is in a "dead zone," meaning it cannot be accessed before it is declared. 
// This occurs with variables declared using let and const. During this phase, trying to access the variable will result in a ReferenceError.

// console.log(a); // Logs the value of 'a'
// var a = 20; // Variable declaration is hoisted, but assignment happens later

// console.log(a);
// var a;
// //undefine

// console.log(a);
// let a;//refrence error

// console.log(a);
// const a=10;//refrence error

// console.log(a);
// const a;//syntax error


// // Temporal dead zone: The time between the start of the block and the actual declaration of the variable is called the temporal dead zone.


// var sum = function (){
//     console.log("Hello");
// }
// sum()//hello

//function expression are not hoisted,but function declaration is hoisted.
// sum()
// var sum = function (){
//     console.log("Hello");
// }//sum is  not defined


// let and const are not hoisted,but var is hoisted.
// sum()
// let sum = function (){
//     console.log("Hello");
// }//can not access before initialization



// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   readline.question('Who are you?', name => {
//     console.log(Hey there ${name}!);
//        readline.close();
//   })





// FUNCTION DECLARATIONS ARE HOISTED, FUNCTION EXPRESSIONS ARE NOT HOISTED.


// var abc = undefined;
// abc();
// When we are declaring a function directly this is called a function declaration.\
// sum()
// function sum() {
//     let a=29;
//   console.log(a,"THIS IS THE FUNCTION DECLARATION");
// }//29 

// //Function expression: When you are expressing a function inside a variable it is called the function expression.

// console.log(abc, "The value of abc"); // It will give undefined
// abc(); // It will give error BECAUSE THE UNDEFINED CANNOT BE CALLED AS A FUNCTION
// var abc = function () {
//   console.log("THIS IS THE FUNCTION EXPRESSION");
// };


//  LET AND CONST DECLARATIONS ARE NOT HOISTED. THEY ARE IN THE TEMPORAL DEAD ZONE.
// console.log(a); // using this a
// var a = 10;  // initializing this a===> Temporal dead zone
// // console.log(a);
// // console.log(B); // using this a
// // let b = 10;  // initializing this a===> Temporal dead zone
// // console.log(b);
// console.log(some); // using this ""
// var some = 10;
// abc(); // undefined => can you call an undefined variable as a funciton? NO
//  var abc = function hoistedFunc(){
//     console.log("This is the hoisted function");
// }









//The declarations are moved to the top of their scope. It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// console.log(a); //usage
// let a = 10
// add = undefined
// add()
//  let add = function (){
//     console.log("This is a function declaration")
// }

// console.log(a); //usage
// var a = 10
// add = undefined
// add()
//  let add = function (){
//     console.log("This is a function declaration")
// }