// let num=122;
// let originalnum=num;
// let reverse=0;
// while(num>0){;
//     let ld=num%10
//     reverse=(reverse*10)+ld;
//     num=Math.floor(num/10);
// }
// if (originalnum===reverse){
//     console.log("palindorme")
// }
// else{
//     console.log("not palindrome")
// }

// const arr =[1,2,3,4]
// arr.lenght = 0
// // const arr =[1,2,3,4]
// // arr[11] = 5
// console.log(arr) //[ 1, 2, 3, 4, lenght: 0 ]


// num = 10 
// console.log(num)
// var num;//10

// console.log(a)
// var a=10;//undefine

// let obj = {name:"mahi", city:"dharmashala"}
// let obj2 = obj;
// obj2.pin=123456;
// console.log(obj)
// console.log(obj2)//same for both

// function declaration(a = 3, b = 4) {
//     return a + b; 
//     console.log(a + b);
//     console.log(a + b);
//     console.log(a + b);
//   }
//   console.log(declaration(2,2));

// function declaration() {
//     a=10;
//     b=10;
//     return a + b; 
//     console.log(a + b);
//     console.log(a + b);
//     console.log(a + b);
//   }
//   console.log(declaration());

//   [1,1,0,0,0,1,0,01,0] 1,1 aage lana hai,00 last



// function declaration(a = 3, b = 4) {
//     return a + b; 
// }
// console.log(declaration()); 
// console.log(declaration(5));
// console.log(declaration(5, 6));


// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
//   }

// write a code using switch case?

// var num = 8;
// var num = 10;

// console.log(num);


// function isPrime(n) {
//     let i = 1;
//     let c = 0;

//     while (i <= n) {
//         if (n % i == 0) {
//             c = c + 1;
//         }
//         i++;
//     }

//     if (c == 2) {
//         return "Yes, it's a prime number.";
//     } else {
//         return "No, it's not a prime number.";
//     }
// }

// // Example usage with prime numbers
// console.log(isPrime(1));  // Output: Yes
// // console.log(isPrime(7));  // Output: Yes
// // console.log(isPrime(11)); // Output: Yes

// // Example usage with a non-prime number
// console.log(isPrime(10)); // Output: No



// there is 10 floors in hotel each have 10 rooms and there is total 100 rooms 
// and there is a and b both in a diffrent rooms like a=9 b=11 ou need to find the floor gap between them like in above example there is 1 floor


// function findFloorGap(roomA, roomB) {
//     // Calculate the floor numbers using integer division
//     let floorA = Math.floor((roomA - 1) / 10); // Subtract 1 for zero indexing
//     let floorB = Math.floor((roomB - 1) / 10); // Subtract 1 for zero indexing

//     // Calculate the floor gap
//     let floorGap = floorA - floorB;

//     // Convert to positive if negative
//     if (floorGap < 0) {
//         floorGap = -floorGap; // Ensure positive gap
//     }

//     // Output the result
//     if (floorGap === 0) {
//         console.log("Both are on the same floor.");
//     } else {
//         console.log("The floor gap between the rooms is: " + floorGap);
//     }
// }

// Example usage
// findFloorGap(9, 11); // Output: The floor gap between the rooms is: 1


// let a = [1, 7, 2, 3, 4];
// let largest = a[0]; 
// let i = 1;

// while (i < a.length) {
//     if (a[i] > largest) {
//         largest = a[i]; 
//     }
//     i++;
// }

// console.log("The largest number is:", largest); // Output: The largest number is: 7


// const numbers = [5, 12, 3, 13, 44]; i want all element  which are greater than 10

// let arr=[5,12,3,13,44];
// let i=0;
// while(i<arr.length && arr[i]>10){
//     console.log(arr[i])
//     i++;
// }

// let arr = [5, 12, 3, 13, 44];
// let i = 0;
// while (i < arr.length && arr[i] > 10) {
//     console.log(arr[i]);
//     i++;
// }


// i want oeleme t which is greatrethan zero so what will be method?

// let num = 5;
// let newNum = num++; 
// newNum = ++num;     

// console.log(num);   
// console.log(newNum);

// three increment and post incremeny

// let arr=[1,2,34,4,7];
// let i=0;
// while(i<arr.length && arr[i]%2==0){
//     console.log(arr[i]);
//     i++;
// }



// console.log(1 + '2'); 
// console.log('5' - 2);  
// console.log(Number('10')-5)
// console.log(Number('10')+5)
// console.log('5' - '7');
