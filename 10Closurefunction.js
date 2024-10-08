// A closure is a function having acces to the parent scope .It preserve the data from outside.
// A closure is an inner function that has access to the outer (enclosing) function's variable

// For every closure we have three scopes:-
// *Local scope(own scope)
// * Outer function scope:-when we create one function inside another function.so parent function will be outer function and child function will be inner function.(means inner function hamare outer function ko asccess kar skta hai)
// * Global scope





// means hum ismai outer function (scope) ki value inner function mai hum access kar skte hai , it is closure function.
// example1:-
// let i = 10;
// function show(){
//     let  j = 20 ;
//     console.log(i)
//     console.log(j)
// }
// show()

// example2:-

// function show (){
//     var j = "j a local vari of outer function";
//     console.log(j);
//     function innerFun(){
//         let k = "k a local vari of inner function";
//         console.log(k);
//         console.log(j);
//     }
//     innerFun()
// }show()


// example3:-
// let a=2;
// function outer(){
//     let b=20;
//     function inner(){
//         console.log(a,b)
//     }
//     return inner;
// }

//write a function in which you have a counter but it should log the counter only if the value is 3.

// this is our normal function:-

// function counter(){
//     let count = 1;
//     if(count%3 == 0){
//         console.log("This is printing", count)
//     }else{
//         count++;
//         console.log("This is not printing", count)
//     }
// }
// counter() // count = 1
// counter() // count = 1
// counter() // count = 1


// this is closure function:-

// function counter() {
//     let count = 1;
//     return function increment() {
//       if (count === 3) {
//         console.log("this is printing", count );
//       } else {
//         console.log("this is not printing", count);
//       }
//       count++;
//     };
//   }
//   let incrementCounter = counter()
//   console.log(counter())
//   incrementCounter()
//   incrementCounter()
//   incrementCounter()




// *but outer function can't access of inner function property.
// example:-
// function show (){
//     var j = "j a local vari of outer function";
//     console.log(j);
//     function innerFun(){
//         let k = "k a local vari of inner function";
//         console.log(k);
//         console.log(j);
//     }
//     innerFun()
//     console.log(k)
// }show()






















//closure is a function that makes use of variables defined in outer functions that have previously returned

//Hoisiting = > You are able to access a global variable inside any function. But you cannot access a local variable outside the function.

// let a = 32094;

// function abc(){
//     return function bcd(){
//         console.log(a);
//         let b = 123
//     }
// }
// console.log(b);
// abc()()
//lexical environment

// A closure is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// function outer() {
//   let counter = 0;
//   return function incrementCounter() {
//     counter++;
//     console.log(counter);
//   };
// }

//write a function in which you have a counter but it should log the counter only if the value is 3.

// function counter(){
//     let count = 1;
//     if(count%3 == 0){
//         console.log("This is printing", count)
//     }else{
//         count++;
//         console.log("This is not printing", count)
//     }
// }

// counter() // count = 1
// counter() // count = 1
// counter() // count = 1

function counter() {
    let count = 1;
    return function increment() {
      if (count === 3) {
        console.log("this is printing", count );
      } else {
        console.log("this is not printing", count);
      }
      count++;
    };
  }
  
  let incrementCounter = counter()
  console.log(counter())
  incrementCounter()
  incrementCounter()
  incrementCounter()