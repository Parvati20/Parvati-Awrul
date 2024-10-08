// In JavaScript, errors can be categorized into several types based on their nature. Here are the main types of errors:

//ERRORS IN JAVASCRIPT 
//1. Syntax Error
//2. Reference Error
//3. Type Error
// 4.run time error


//Syntax Error: It is an error that occurs when the syntax of the code is incorrect. It is a compile-time error.
// example:-
// let a  = 10;
// console.log(a //usage  


// Reference Error: It is an error that occurs when a variable is used before it is declared.
// example:-
// console.log(a); //usage
// let a = 1;  // initializing this a===> Temporal dead zone

// console.log(myVariable); // ReferenceError: myVariable is not defined



// Type Error: It is an error that occurs when a value is not of the expected type.
// example:-
// let b = 100; //number
// b(); // calling it as a function but it is a number. type error

// typeError occurs when a value is not of the expected type.
// In this case, b is a number, but you're trying to call it as if it were a function (b()).
// Since numbers are not callable (you can only call functions), JavaScript throws a TypeError.


// let obj = null;              // 'obj' is assigned a value of null
// console.log(obj.property);   // Trying to access 'property' on 'obj'


//Runtime Error: It is an error that occurs during the execution of the code.
// example:-
// let a = 10;
// console.log(a/0); //usage

// a = "hello";
// console.log(a * 2); 

// Calling a function that hasn’t been defined leads to a runtime error.
// myFunction(); // myFunction is not defined

// Custom Errors:-You can create your own error types by extending the built-in Error class.
// example:-
// class CustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "CustomError";
//     }
// }
// throw new CustomError("This is a custom error.");






//error throwing function

// function throwError(){
//     throw new Error("This is an error");
// }
// throw new Error("This is an error");
// throwError()


//Try Catch Block, Finally = > {   }

//try => block of code that might throw an error. Javscript attempts to execute this code normally
// catch bock=> if an error or exception is thrown inside the try block it is handled in the catch block. This contains the exception code and provides info about the exception.

//finally: => It is optional it is executed regardless the error occured. always will be executed.

// console.log("Before try block");
// try{
//     // console.log(a);
//     let a = 20;
// } catch (error) {
//     // console.log("Cannnot access a before initialization");
//     console.log(error);
// }
// finally{
//     console.log("this is successfully done")
// }