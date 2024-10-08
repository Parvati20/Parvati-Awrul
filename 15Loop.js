// A loop in programming lets you repeat the same task many times without having to write the same code again and again.
//  It will keep repeating until a certain condition is met (like a rule being true). Loops help save time and make your code shorter.

//  Real-life Example:
// Imagine you want to water 5 plants in your garden. Instead of saying:

// Water plant 1.
// Water plant 2.
// Water plant 3.
// Water plant 4.
// Water plant 5.
// You can use a loop to water each plant, one after the other, automatically.
// In Programming (using a loop):
// for (let i = 1; i <= 5; i++) {
//   console.log("Water plant " + i);
// }



//Entry controlled loop or for loop:  the condition is checked and then the operation is performed. 
// 1. Entry-controlled Loop
// In an entry-controlled loop, the condition is checked before the loop starts running. 
// If the condition is true, the loop runs; if it's false, the loop doesn't run at all.

// Examples of Entry-controlled Loops:
// For loop
// While loop

//For Loop:-Runs the block of code a fixed number of times.
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
  

//While Loop and exit control loop:-Repeats the block of code as long as a condition is true.
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

//EXIT Control Loop :The operation is done and then the condition is checked. Do while loop
// Exit-controlled Loop
// In an exit-controlled loop, the condition is checked after the loop has executed at least once. 
// This means the loop will always run at least once, even if the condition is false from the start.

//Do While Loop:-Similar to the while loop, but it runs the code block at least once before checking the condition.
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);





//FOR of loop: It loops through the values of the string or array(iterable object=> Cheez, thing).
// const arr = [1,2,3,54,"string"];
// console.log(arr[3]);
// for (let i = 0; i < arr.length; i++;) {
//   console.log(arr[i]);
// }
// for (let i of arr) {
//   console.log(i+1);
// }


// let colors = ['red', 'green', 'blue'];
// for (let color of colors) {
//   console.log(color);
// }



//OBJECTS ARE NOT ITERABLE IN JS

//For In loops in JS:The for...in loop is used to iterate over the properties (keys) of an object. It loops through each key of the object.
// let person = { name: 'John', age: 30, city: 'New York' };
// for (let key in person) {
//   console.log(key + ': ' + person[key]);
// }

// let obj = {
//   name: "Ankush",
//   age: 40,
//   isMarried: true,
//   role: "Manager",
// };

// for (let key in obj) {
//   console.log(obj[key]);
// }



//FOR EACH LOOP :  For arrays only
// The forEach loop is used to go through every item in an array and do something with each item.
// let fruits = ['apple', 'banana', 'cherry',1];
// fruits.forEach(function(fruit) {
//   console.log(fruit);
// });
// it does not return anything
//modify the original array
//operations on array elements

// let arr = [1,2,3,4,5,6,7,8];
// let resultArr = [];
//  let newArr = arr.forEach((value,index)=>{
//     resultArr.push(value*2);
//     arr[index] = value*2;
// })
// console.log(arr, "This is the new array");
// const arr = [10, -1, 2, 2, -2, 0];

// // Sort in ascending order
// const ascendingOrder = arr.slice().sort((a, b) => a - b);
// console.log("Ascending Order:", ascendingOrder);



// // Sort in descending order
// const descendingOrder = arr.slice().sort((a, b) => b - a);
// console.log("Descending Order:", descendingOrder);


const time=setTimeout(()=>{
    console.log("Hii")
},3000);

clearTimeout(time);
console.log("Hello");