// Array:- non primitive data typeof, index and value pair, mutable, type of array is Object.  
// syntax-let arr=[];

// * Creating an array:-
// let array_name = [item1, item2, ...];   

// Array is a collection of data. It can store multiple values in a single variable.
//Array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; truthy value

// why you use array?
// * If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
// let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";
// * An array can hold many values under a single name, and you can access the values by referring to an index number.
// let cars = ["Saab", "Volvo", "BMW"];

// * Spaces and line breaks are not important. A declaration can span multiple lines:
// Example:-
// const cars = [
//   "Saab",
//   "Volvo",
//   "BMW"
// ];

// * Accessing Array Elements:-You access an array element by referring to the index number:
// example:-
// const cars = ["Saab", "Volvo", "BMW"];
// let car = cars[0];
// console.log(car)

// * Note: Array indexes start with 0.


// shift-it is used to remove the first element from an array. 
// syntax-array_name.shift()
// example:-
// let arr=[1,2,3,4,5,6,7,8,9];
// arr.shift()
// console.log(arr)

 
// unshift-it is used to add one or more elements to the beginning of an array.  
// syntax-array_name.unshift()
// example:-
// let arr=[1,2,3,4,5,6,7,8,9];
// arr.unshift(0,"0","jaya")
// arr.unshift("1")
// console.log(arr)

// pop-it is used to remove the last element from an array. 
// syntax-array_name.pop()
// example:-
// let arr =[1,2,3,4,5,6,7,8,9];
// arr.pop()
// arr.pop()
// console.log(arr)

// push-it is used to add one or more elements to the end of an array.
// syntax- array_name.push()
// example:-
// let arr =[1,2,3,4,5,6,7,8,9];
// arr.push("0")
// arr.push(0)
// console.log(arr)


// length property-it is used to return the length of an array. 
// syntax-array_name.length()
// example:-
// let arr=[1,2,3,4,5,6,7,8,9, ,];
// console.log(arr.length,"this is the length of an array")


// special operator= delete operator very poor practice , we must not use this method.
// example-
// let arr =[1,2,3,4,5,6,7,8,9];
// delete arr[0]; //using indexing
// console.log(arr,arr.length)


// toString-it is used to convert an array to a String.
// syntax-array_name.toString()
// example-
// let arr=[1,2,3,4];
// console.log(typeof arr.toString(),"this is the type")

// index-it  basically defines the position of an element in the array or notation of array.
// Array.at() => It is used to return the element at a specified index. 
// syntax-array_name.at(index);
// // example-
// let arr=[1,2,3,4];
// console.log(arr.at(2), "This is the element at a specified index");


// Concat Method => It is used to join two or more arrays.
// syntax- array_name.concat(array1, array2, array3)
// example-
// let arr = [1, 2, 3, 4];
// let arr2 = [9, 2, 3, 4];
// console.log(arr.concat(arr2, [5,6,7,8],[0]), "This is the joined array");


// Flat method-The flat() method is used to take an array that has nested arrays (arrays within arrays) and combine all the values into a single, flat array.
// let arr = [1,2,3,4];
// let arr2 = [1,4,[5,6,7,8,[1,2]]]; // depth of array is 2.
// depth == dimension of the array. [1,2,3] = > depth =1
// [1,2,[3,4]] //=> depth = 2
// [1,2,3[1,2,3,[1,2,3]]] //=> depth = 3
// console.log(arr2.flat(1), "This is the flattened array");
// console.log(arr2.flat(0), "This is the flattened array");
// console.log(arr2.flat(2), "This is the flattened array");


// const arr=[1,2,3,4,[5,6]]
// const flatArr = arr.flat();
// console.log(flatArr)

// let arr=[1,2,3,4,[5,6,[7,8,[7,[5]]]]]    //by defalut value 1 only in flat method
// let flatArr=arr.flat(3)
// console.log(flatArr)

// If you want to flatten everything no matter how deep it is, you can use Infinity.
// const arr = [1, [2, [3, [4, 5]]], 6];
// const flattened = arr.flat(Infinity);
// console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

// Why Use flat()?
// It makes it easier to work with data when you have lists that are organized in multiple levels.
// Instead of having to deal with complicated structures, you can flatten them into a simple list.




// Array.isArray() => It is used to check whether an object is an array or not. 
// syntax- Array.isArray(arr)
// example:-
// let arr2 = [1,4,[5,6,7,8,[1,2]]]; 
// console.log(Array.isArray(arr2));

// let arr2 = [1, 4, [5, 6, 7, 8, [1, 2]], {}, "sasd"];
// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// //   console.log(Array.isArray(arr2[i]));
// }



// Array.slice() => It is used to extract a part of an array and returns a new array.It doesn't modify the original array.
// syntax- arr.slice(start, end)
// example:-
// let arr = [1,2,3,4]
// console.log(arr.slice(1), "This is the sliced array");
// console.log(arr.slice(1,3), "This is the sliced array");

// You can use negative numbers to slice from the end of the array. For example, -1 refers to the last element.
// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// const slicedFruits = fruits.slice(-3, -1);
// console.log(slicedFruits); // Output: ['orange', 'grape']




// Array.splice() => It is used to add or remove elements from an array. 
// syntx-arr.splice(start index, deleteCount, insert_item1, insert_item2, insert_item3);
// start: The index at which to start changing the array.
// deleteCount: The number of elements to remove from the array starting at the start index.
// item1, item2, ...: The elements to add to the array starting at the start index (optional).
// * The splice() method is powerful for modifying arrays, allowing you to add, remove, or replace elements in place. 
// example:-
// const fruits = ['apple', 'banana', 'orange', 'grape'];
// fruits.splice(1, 2); // Starts at index 1, removes 2 elements
// console.log(fruits); // Output: ['apple', 'grape']

// Adding Elements:
// You can add elements without removing any:
// const fruits = ['apple', 'banana', 'orange'];
// fruits.splice(1, 0, 'grape', 'kiwi'); // Starts at index 1, removes 0 elements, adds 'grape' and 'kiwi'
// console.log(fruits); // Output: ['apple', 'grape', 'kiwi', 'banana', 'orange']

// Replacing Elements:
// You can also replace existing elements:
// const fruits = ['apple', 'banana', 'orange'];
// fruits.splice(1, 1, 'grape', 'kiwi'); // Starts at index 1, removes 1 element, adds 'grape' and 'kiwi'
// console.log(fruits); // Output: ['apple', 'grape', 'kiwi', 'orange']

// Using Negative Indices:
// You can use negative indices to start counting from the end of the array.
// const fruits = ['apple', 'banana', 'orange', 'grape'];
// fruits.splice(-2, 1); // Starts 2 from the end, removes 1 element
// console.log(fruits); // Output: ['apple', 'banana', 'grape']

// Return Value:-
// The splice() method returns an array containing the deleted elements (if any). If no elements are deleted, it returns an empty array.
// const fruits = ['apple', 'banana', 'orange', 'grape'];
// const removed = fruits.splice(1, 1); // Removes 'banana'
// console.log(removed); // Output: ['banana']
// console.log(fruits); // Output: ['apple', 'orange', 'grape']

// let arr = [1,2,3,4];
// arr.splice(2);
// console.log(arr, "This is the spliced array");
// arr.splice(2,1);
// console.log(arr, "This is the spliced array");
// arr[arr.length-2] = "new value";
// console.log(arr, "This is the updated array");



// Join method => It is used to join all the elements of an array into a string. 
// * The join() method in JavaScript is used to combine all elements of an array into a single string. You can specify a separator that will be placed between the elements in the resulting string.
// syntax-arr.join(separator)
// example:-
// let arr = ["Hello", "Shivansh", "Ankush", "Rahul"];
// console.log(arr.join(""), "This is the joined string");
// console.log(arr.join(" "), "This is the joined string");
// console.log(arr.join(","), "This is the joined string");

// const words = ['Hello', 'World'];
// const result = words.join('*');
// console.log(result); // Output: "Hello***World"



// Reverse method => It is used to reverse the elements of an array. 
// syntax-arr.reverse()
// example:-
// let arr = ["Hello", "Shivansh", "Ankush", "Rahul"];
// console.log(arr.reverse(), "This is the reversed array");

// let arr1 = [2,3,7,3,1,10];
// console.log(arr1.reverse(), "This is the sorted array");


// Array.sort() => It is used to sort the elements of an array. 
// syntax-arr.sort()
// example:-
// let arr = [2,3,7,3,10];
// console.log(arr.sort(), "This is the sorted array");
// console.log(arr.sort((a,b)=>b-a), "This is the sorted array"); // DISCUSS LATER


// INDEXOF => It is used to return the index of the first occurrence of a specified value in an array. 
// syntax-arr.indexOf(value)
// example:-
// let arr = [2,3,7,7,3,10];
// console.log(arr.indexOf(7), "This is the index of the first occurrence of a specified value in an array");
// console.log(arr.lastIndexOf(3), "This is the index of the last occurrence of a specified value in an array");


// Array.includes() => It is used to check whether an array contains a specified value. 
// syntax-arr.includes(value, start)
// example:-
// let arr = [2,3,7,3,10];
// console.log(!arr.includes(10), "This is the boolean value");
// console.log(arr.includes(10), "This is the boolean value");


// Array.copyWithin()-it is used to copy array elements within the array.
// syntax-aar.copyWithin(target,start,end), if you do not provide the start and end then it will copy the whole Array.
// target index=where you want to paste the copied Array.
// start index-from where you want to start copying the array.
// end index-till where you want to copy the array. `
// or
// The copyWithin() method allows you to copy elements from one part of the array to another, and it modifies the original array in place. 
// example-
// let arr=["A","B","C","D","E"]
// console.log(arr.copyWithin(1,4)) 
// console.log(arr.copyWithin(1,3)) 
// console.log(arr.copyWithin(1,3,4))
// console.log(arr.copyWithin(2,1,5))
// console.log(arr.copyWithin(2,1,4))


// let arr=[1,2,3,4,5,6,7,8]
// console.log(arr.copyWithin(1,3))
// The first parameter 1 is the index where the copied elements will be placed.
// The second parameter 3 is the index from which to start copying elements.
// console.log(arr.copyWithin(1,7))
// console.log(arr.copyWithin(1,6))
// console.log(arr.copyWithin(1,6,7))
// console.log(arr.copyWithin(1,5,7))


// * When to Use Arrays. When to use Objects.
// 1. JavaScript does not support associative arrays.
// 2. You should use objects when you want the element names to be strings (text).
// 3. You should use arrays when you want the element names to be numbers.