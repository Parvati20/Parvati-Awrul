// its not copy because obj2 point on obj ;

// let obj ={
//         name : "jaya",
//         age : 17 
//     }
//     let obj2 = obj;
//     obj2.name= "soni";
//     console.log(obj);
//     console.log(obj2);

////its copying /////////////

// example:-
// let obj ={
//     name : "jaya",
//     age : 17 
// }
// let obj2 = {...obj};
// obj2.name= "soni";
// console.log(obj);
// console.log(obj2);

//*nested obj
//**shallow copy = jab aap kisi object ko copy kare with object.assign  ke through ya fir spread ke through, in dono hi cases mai top level props
//  to copy ho jati h par kisi bhi nested object ki propertice copy hone ki  jagah fir se reference pass kar deti h .


// shallow copy :- In Shallow copy, a copy of the original object is  stored and only the reference address is finally copied. 
// example:-

// let obj ={
//     name : "jaya",
//     age :18,
//     social:{
//         facebook: {
//             ac1: "jayasoni@gmail.com",
//             ac2: "jayasoni@gmail.com"
//         },
//         twitter: {
//             free:{
//                 ac1: "jayasoni@gmail.com"
//             },
//             paid :{
//                 ac1: "jayasoni@gmail.com"
//             }
//         }
//     } 
// }
// let obj2 = {...obj};

// obj2.social.facebook.ac1 = "changed";
// console.log(obj.social.facebook.ac1);
// console.log(obj2.social.facebook.ac1);

// **Deep copy :-In Deep copy, the copy of the original object and the repetitive copies both are stored.
// let obj ={
//         name : "jaya",
//         age :18,
//         social:{
//             facebook: {
//                 ac1: "jayasoni@gmail.com",
//                 ac2: "jayasoni@gmail.com"
//             },
//             twitter: {
//                 free:{
//                     ac1: "jayasoni@gmail.com"
//                 },
//                 paid :{
//                     ac1: "jayasoni@gmail.com"
//                 }
//             }
//         } 
// } 
// let obj2 = JSON.parse(JSON.stringify(obj));

// obj2.social.facebook.ac1 = "changed";

// console.log(obj.social.facebook.ac1);
// console.log(obj2.social.facebook.ac1);