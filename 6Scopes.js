//SCOPES IN JAVSCRIPT : The area of accessibility of a variable is called a scope.

//1. function scope: the variable declared inside the function is called a function scope. var is a function scope variable.
// example:-
// function myFunction() {
//     // Function variable
//     let functionVar = "I am a function variable";
//     console.log(functionVar); // Accessible inside the function
// }
// myFunction(); // Output: I am a function variable
// // console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

//2. block scope: the variable declared inside the block is called a block scope. let and const(e.g., within {} of an if statement)
// example:-
// if (true) {
//     // Block variable
//     let blockVar = "I am a block variable";
//     console.log(blockVar); // Accessible inside the block
// }
// // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

//3. global scope: the variable declared outside the function is called a global scope.
// globally declared: That can be used anywhere in the program.
// example:-
// Global variable
// let globalVar = "I am a global variable";
// function showGlobal() {
//     console.log(globalVar); // Accessible
// }
// showGlobal(); // Output: I am a global variable
// console.log(globalVar); // Output: I am a global variable


//globally declared: That can be used anywhere in the program.
const globalVal = "Accessible anywhere";
{
  const globalVal = "Accessible anywhere...........";
}

function sum() {
  console.log(globalVal, " This is inside a function");
}
sum();
{
  console.log(globalVal, " THis is inside a block");
}



//function scope
// function sum() {
//   if (true) {
//      globalVal = "Accessible anywhere";
//     console.log(globalVal, " This is inside a function");
//   }
//   console.log(globalVal, " THis is inside a block");
// }
// sum();
// console.log(globalVal, " THis is Outside a function and block")


// function sum() {
//     if (true) {
//        let globalVal = "Accessible anywhere";
//       console.log(globalVal, " This is inside a function");
//     }
//     console.log(globalVal, " THis is inside a block");
//   }
//   sum();
//   console.log(globalVal, " THis is Outside a function and block")


// var fullNam="shivansh";
// function myfullName(){
//    fullName="rawat"
//     console.log(fullName)
// }
// myfullName()
//  var fullName="rawat";
// console.log(fullName)



// In your code, you're trying to declare a constant variable something without initializing it. In JavaScript, when you declare a constant using const, you must assign it a value at the time of declaration.
// let sdf = "shivansh";
// const something;
// something=  "shivansh";
// console.log(something);


// {
//   var a = 20;
//   function sum() {
//     if (true) {
//       let globalVal = "Accessible anywhere";
//       console.log(globalVal, " This is inside a function");
//     }
//     console.log(globalVal, " THis is inside a block");
//   }
// sum()
// }
// console.log(a)

// {
//     var a = 20;
//     function sum() {
//       if (true) {
//         var globalVal = "Accessible anywhere";
//         console.log(globalVal, " This is inside a function");
//       }
//       console.log(globalVal, " THis is inside a block");
//     }
//   sum()
//   }
//   console.log(a)
  



// // Global scope
// let globalVar = "I am a global variable";
// function myFunction() {
//     // Function scope
//     let functionVar = "I am a function variable";
//     if (true) {
//         // Block scope
//         let blockVar = "I am a block variable";
        
//         console.log(globalVar); // Accessible
//         console.log(functionVar); // Accessible
//         console.log(blockVar); // Accessible
//     }

//     // Outside the block but still inside the function
//     console.log(globalVar); // Accessible
//     console.log(functionVar); // Accessible
//     // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined (not accessible here)
// }
// // // Call the function
// myFunction();
// console.log(globalVar); // Accessible
// // console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined (not accessible here)
// // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined (not accessible here)