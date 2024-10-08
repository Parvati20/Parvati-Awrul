//JAVASCRIPT IS CASE SENSTIVE LANGUAGE= >IT RECOGNIZES THE DIFFERENCE BETWEEN LOWERCASE AND UPPERCASE LETTERS.
//password = > Shiuvnahs@1232143 = >shivansh@1232143
//UPPERCASE LETTERS = > A-Z
//LOWERCASE LETTERS = > a-z
// String => Primitive data type, "" or '' or  ${}, Immutable

// 1. Definition
// A string is a sequence of characters used to represent text in JavaScript. Strings can include letters, numbers, symbols, and whitespace.

// 2. Creating Strings
// You can create strings using:
// Single Quotes: 'Hello'
// Double Quotes: "Hello"
// Backticks (Template Literals): Hello

// A string in JavaScript is a way to represent text.
// It can be made with single quotes ('), double quotes ("), or backticks (`). 
// Strings are like a box that holds letters, numbers, and symbols, and once you create a string, 
// you can’t change its content directly. You can use it to display messages or manipulate text.

// String Immutability:-
// Strings are immutable, meaning once created, their values cannot be changed. Any modification will create a new string.
// example:-
// let text = "  JavaScript is fun!  ";
// console.log(text.trim()); // "JavaScript is fun!" 
// console.log(text.toUpperCase()); // "  JAVASCRIPT IS FUN!  "
// console.log(text.split(" ")); // ["", "JavaScript", "is", "fun!", ""]

// Escape Characters:-
// To include special characters in strings, you can use escape sequences:
// \' for single quote
// \" for double quote
// \\ for backslash
// \n for new line
// \t for tab
// let quote = "She said, \"Hello!\"";
// console.log(quote) 

// Template Literals:-
// Backticks allow for multi-line strings and string interpolation (inserting variables directly):
// let name = "Alice";
// let greeting = Hello, ${name}!;
// console.log(greeting); // "Hello, Alice!"


// JavaScript provides several built-in methods for manipulating strings:
//String Methods..............

//1. length => It is used to return the length of a string. 
// syntax:-str.length
// example:-
// let a = " Hello World";
// console.log(a.length, "This is the length of a string");

// 2. toUpperCase() => It is used to convert a string to uppercase. 
// syntax:-str.toUpperCase()
// example:-
// let b = "Hello World";
// console.log(b.toUpperCase(), "This is the string in uppercase");

//3. toLowerCase() => It is used to convert a string to lowercase. 
// syntax:-str.toLowerCase()
// example:-
// let c = "Hello World";
// console.log(c.toLowerCase(), "This is the string in uppercase");

//4. charAt() => It is used to return the character at a specified index. 
// syntax:-str.charAt(index)
// example:-
// let a = " Hello World";
// console.log(a.charAt(0), "This is the character at a specified index");
// console.log(a.charAt(1), "This is the character at a specified index");

//5. charCodeAt() => It is used to return the Unicode of the character at a specified index. 
// syntax:-str.charCodeAt(index)
// example:-
// let a = " Hello World";
// console.log(a.charCodeAt(0), "This is the Unicode of the character at a specified index");
// console.log(a.charCodeAt(1), "This is the Unicode of the character at a specified index");

//6. concat() => It is used to join two or more strings. 
// syntax:-
// str.concat(string1, string2, string3)
// example:-
// let text = "Helllo";
// let bcs = "World";
// console.log(text.concat(" ", bcs,text), "This is the joined string"); 
// console.log(text.concat(" ", bcs," ",text), "This is the joined string"); 

//Trim => It is used to remove the white spaces from both ends of a string. 
// syntax:-str.trim()
// example:-
// let string = "   Hello World   ";
// console.log(string.trim())

// Trim start => It is used to remove the white spaces from the start of a string. 
// syntax:-str.trimStart()
// example:-
// let string = "   Hello World   ";
// console.log(string.trimStart(), "This is the trimmed string");

// Trim end => It is used to remove the white spaces from the end of a string.
// syntax:- str.trimEnd()
// example:-
// let string = "   Hello World   ";
// console.log(string.trimEnd(), "This is the trimmed string");

//7. slice method => It is used to extract a part of a string and returns a new string. 
// * slice(start, end): Similar to substring, but can accept negative indices.
// syntax:-str.slice(start, end)
// example:-
// console.log("Hello".slice(-3)); // "llo"
// console.log("Hello".slice(1,-3)); // "e"
// console.log("Hello".slice(-3,1)); // nothing

// let string = "Hello World";
// console.log(string.slice(4,1), "This is the sliced string"); //nothing
// console.log(string.slice(1,7), "This is the sliced string");//ello W
// console.log(string.slice(1,3), "This is the sliced string");//el
// console.log(string.slice(2,4), "This is the sliced string");
// console.log(string.slice(0,3), "This is the sliced string");

// 8. substring() => It is used to extract a part of a string and returns a new string. 
// syntax:str.substring(start, end)
// * No, you cannot use negative values with the substring method in JavaScript. If you provide a negative index, it will be treated as 0.
// If start is greater than end, substring swaps the two values. So substring(4, 1) is treated as substring(1, 4).
// let string = "Hello World";
// console.log("Hello".substring(1, 4)); // "ell"
// console.log(string.substring(4,1), "This is the sliced string");
// console.log("Hello".substring(-1, 4));
// console.log("Hello".substring(3, 4));
// console.log("Hello".substring(1, 4));


// substr(start, length)
// Parameters:
// start: The index at which to start extraction (inclusive). Can be negative.
// length: The number of characters to extract.

// substr():
// If start is negative, it counts from the end of the string.
// The length parameter specifies how many characters to extract, and if omitted, it extracts until the end of the string.
//9. substr() => It is used to extract a part of a string and returns a new string. str.substr(start, length)
// let string = "Hello World";
// console.log(string.substr(1,3), "This is the sliced string");

// let str = "Hello";
// console.log(str.substr(1, 4)); // "ello"
// console.log(str.substr(-3, 1));//"l"
// console.log(str.substr(-3, 2)); // "ll"
// console.log(str.substr(-3, 3)); // "llo"
// console.log(str.substr(-3, 4)); // "llo"
// console.log(str.substr(-3, 5)); // "llo"


//replace() => It is used to replace a specified value with another value in a string. 
// replace(search, replacement): Replaces the first match of a substring with a new substring.
// syntax:-str.replace(value1, value2)
// example:-
// let string = "Hello World";
// console.log(string.replace("Hell", "Hi"), "This is the replaced string");
// console.log("Hello".replace("H", "J")); // "Jello"



//10. replaceAll() => It is used to replace all the occurrences of a specified value with another value in a string. 
// syntax:-str.replaceAll(value1, value2)
// example:-
// let string = "Hello World";
// console.log(string.replaceAll("Hello", "Hi"), "This is the replaceAll string");


//11. repeat() => It is used to repeat a string a specified number of times.
// syntax:-str.repeat(count)
// example:-
// let string = "Hello World";
// console.log(string.repeat(2), "This is the repeated string");


// //12. split() => It is used to split a string into an array of substrings.
// split(separator): Splits the string into an array based on a separator.
// syntax:-str.split(separator, limit)
// let string = "Hello World  dasfsd fsd sd|fsd|sdfsd" ;
// let string2 = string.split(" ").join("|");// = >["Hello", "World", "dasfsd", "fsd", "sd|fsd|sdfsd"]
// console.log(string2.split("|"), "This is the split string");

// console.log("Hello, World!".split(", ")); // ["Hello", "World!"]


// 13. includes() => It is used to check whether a string contains a specified value. 
// syntax:-
// str.includes(value, start). It returns a boolean value.
// example:-
// let string = "Hello World";
// console.log(string.includes('He',2), "This is the includes string");
// console.log(string.includes('He',1), "This is the includes string");
// console.log(string.includes('He',0), "This is the includes string");


//14. startsWith() => It is used to check whether a string starts with a specified value. 
// syntax:-
// str.startsWith(value, start)
// example:-
// let string = "Hello World";
// console.log(string.startsWith('L',2), "This is the startsWith string");
// console.log(string.startsWith('l',2), "This is the startsWith string");
// console.log(string.startsWith('l',1), "This is the startsWith string");


//15. endsWith() => It is used to check whether a string ends with a specified value. 
// syntax:-
// str.endsWith(value, length)
// example:-
// let string = "Hello World";
// console.log(string.endsWith('o',11), "This is the endsWith string");
// console.log(string.endsWith('d',11), "This is the endsWith string");
// console.log(string.endsWith('D',11), "This is the endsWith string");
// console.log(string.endsWith('d',10), "This is the endsWith string");