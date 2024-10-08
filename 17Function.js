// FUNCTIONS :Function is a block of code that can be reused. It can take parameters and return value it may not return a value.
//parameters are the names listed in the function definition.
//arguments are the real values passed to the function.

//TYPE OF FUNCTIONS.

//1. FUNCTION DECLARATION: DECLARING A FUNCTION.
//2. FUNCTION EXPRESSION: EXPRESSION A FUNCTION INSIDE A VARIABLE.
//3. ANONYMOUS FUNCTION: A FUNCTION WITHOUT A NAME.
//4. ARROW FUNCTION: A FUNCTION WHICH HAVE A SYNTAX AS AN ARROW. ()=>{  }
//5. IIFE: IMMEDIATELY INVOKED FUNCTION EXPRESSION.
//6. CALLBACK FUNCTION: A FUNCTION WHICH IS PASSED AS A ARGUMENT TO ANOTHER FUNCTION.
//7. Higher order function: A function which accepts another function as a parameter.

//FUNCTION DECLARATION:-A function declaration is a way to define a function in JavaScript using the function keyword.
//  Function declarations are hoisted, meaning they can be called before they are defined in the code.

// * Function declarations are hoisted to the top of their containing scope,
//  allowing you to call the function before it is defined.
// example:-
// console.log(sayHello()); // Output: Hello!
// function sayHello() {
//     return "Hello!";
// }

// function declaration(a = 3, b = 4) {
//     //default values
//     //parameters = > formal values. Just represent the arguments inside a function
//     return a + b; // return keyword is used to return a value from a function. break statement
//     console.log(a + b);
//     console.log(a + b);
//     console.log(a + b);
//   }
//   let b = declaration; // function ko store karr raha hu.
//   // let abc = declaration(1, 2); //argurments= > Actual values. FUNCTION KI RETURN VALUE KO STORE KARRA HU.
//   console.log(b());
  
  //FUNCTION EXPRESSION:-A function expression is a way to define a function in JavaScript that can be assigned to a variable, passed as an argument, 
  // or returned from another function. Unlike function declarations, function expressions can be anonymous or named.
  // function expression are not hoisted.
  // example:-
  // let varFunc = function (a, b) {
  //   return a + b;
  // };
  // console.log(varFunc(2, 3)); // Output: 5

 
// const multiply = function multiplyFunc(x, y) {
//   return x * y;
// };
// console.log(multiply(4, 5)); // Output: 20

  
  // //ANONYMOUS FUNCTION ==> Function without a name. And they need to be expressed by a variable.
  
  // let anonymous = function () {
  //   console.log("I am an anonymous function");
  // };
  // anonymous(); // Output: I am an anonymous function
  
  

  // // Invoking a function and calling a function are used interchangeably.we mean that both terms generally refer to the same action: executing a function to run its code.
// Invoking a Function:-
// Definition: Invoking a function means executing it. You call the function by using its name followed by parentheses. This will run the code inside the function.
// example:-
// function greet() {
//   console.log("Hello, world!");
// }

// greet(); // This invokes (calls) the function, output: "Hello, world!"





  // //Arrow function:-An arrow function is a concise way to write functions in JavaScript using the => syntax. Arrow functions were introduced in ES6 (ECMAScript 2015) and provide several advantages, such as a shorter syntax and lexical scoping of the this keyword.
  // or
  // /ARROW FUNCTION == released in es6, this function handles "this" keyword in a better way.It is just a easier way to write a function.
  // example:-
  // let add =  () =>{
  //   console.log("Add function");
  // }
  // add()

// const multiply = (x, y) => x * y;
// console.log(multiply(3, 4)); // Output: 12

  
  // //Higher Order Function:-Functions that take another function as an argument (like a callback) are known as higher-order functions.
  // or
  // A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. 
  // Purpose: Higher-order functions are used to create more abstract and reusable code.
  // example:-
  // A higher-order function that takes a function as an argument
// function greet(name) {
//   return Hello, ${name}!;
// }

// function processUserInput(callback) {
//   const userName = "Alice";
//   return callback(userName); // Call the callback function
// }

// // Calling the higher-order function
// const message = processUserInput(greet);
// console.log(message); // Output: Hello, Alice!


// greet Function:

// This is a simple function that takes a name and returns a greeting message.
// processUserInput Function:

// This is a higher-order function because it accepts another function (callback) as its argument.
// Inside this function, userName is defined, and the callback function is invoked with userName as its argument.
// Using the Higher-Order Function:

// When we call processUserInput(greet), we pass the greet function as an argument. The processUserInput function then calls greet with "Alice".





  
//callback function:-A callback function in JavaScript is a function that is passed as an argument to another function and
//  is executed after some kind of event or completion of a task. Callbacks are commonly used for asynchronous operations, such as handling events, making network requests, or performing computations that may take time.
// Purpose: Callbacks are primarily used to handle asynchronous operations, such as responding to events, completing network requests, or processing data after it has been retrieved.
// example:-
// A higher-order function that takes a function as an argument
// function greet(name) {
//   return Hello, ${name}!;
// }

// function processUserInput(callback) {
//   const userName = "Alice";
//   return callback(userName); // Call the callback function
// }

// // Calling the higher-order function
// const message = processUserInput(greet);
// console.log(message); // Output: Hello, Alice!


// greet Function:

// This is a simple function that takes a name and returns a greeting message.
// processUserInput Function:

// This is a higher-order function because it accepts another function (callback) as its argument.
// Inside this function, userName is defined, and the callback function is invoked with userName as its argument.
// Using the Higher-Order Function:

// When we call processUserInput(greet), we pass the greet function as an argument. The processUserInput function then calls greet with "Alice".

 
// Asynchronous Callback:-
// console.log("Start");
// setTimeout(() => {
//     console.log("This runs after 2 seconds");
// }, 2000);
// console.log("End");

  
  
  // //IIFE FUNCTION =An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is defined and executed immediately after its creation. 
  // example:-
//   (function() {
//     var message = "IIFE Example";
//     console.log(message); // Output: IIFE Example
// })();
// // console.log(message); // Uncaught ReferenceError: message is not defined

// You can pass parameters to an IIFE just like any regular function.
// (function(name) {
//   console.log(Hello, ${name}!);
// })("Alice"); // Output: Hello, Alice!












  
  
  // //Methods: Functions inside an object are called methods.
  // //map =- > it returns a new array. modify each element based on the condition in callback function.
  // // let ar = [1, 2, 3, 4, 5];
  
  // // function callback(value){
  // //   return value*2;
  // // }
  // // let newArr = ar.map(callback);
  
  // // console.log(newArr, ar);
  
  
  // //filter => it returns a new array based on the condition.
  
  
  // // let newArr = ar.filter((value) => {
  // //   return value % 2==0;
  // // });
  
  // // console.log(newArr, ar);
  
  
  
  
// reduce method => it returns a single value based on the condition.
// the second argument is the accumulator value.( inital value)
// example:-
  // let ar = [1, 2, 3, 4, 5];
  
  // const sumArr = ar.reduce((acc, curr)=>{
  //   return acc+curr;
  // })
  
  // console.log (sumArr);