// Varibales: the containers for storing a value.
// a variable is a named container used to store data values. we can think of it as a label for a piece of information that you want to use in your code.

// Variable Rules-

// * Variable names are case sensitive "a" , "A" is diffrent . 
// * Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
// * Only a letter, underscore( _ ) or $ should be 1st character.
// * Reserved words cannot be variable names.


// keywords to declare and initialize a variable: let, const and var

// what is mean by keyword?
// A keyword is a reserved word in a programming language that has a special meaning and cannot be used for anything else, like variable names. Keywords are used to perform specific actions or define the structure of your code.
// In JavaScript, common keywords include:
// let,var,const
// if, else, for, while: Control flow keywords for making decisions and loops.

// In JavaScript, there are three main ways to declare variables: var, let, and const. These declarations allow you to create variables with different characteristics and scopes.

// var: The oldest way to declare a variable. It is not recommended to use var to declare a variable.
// Variables declared with var have function scope or global scope, depending on where they are declared.
// var variables can be redeclared and reassigned within their scope.
// Variables declared with var are hoisted to the top of their scope, which means they can be accessed before they are declared.
// Function scope means that the variable is accessible within the function it is declared in, as well as any nested functions.
// Global scope means that the variable is accessible throughout the entire program.


// ES 6 introduced two new ways to declare a variable:

// let declaration:
// The let keyword was introduced in ES6 (ECMAScript 2015) and provides block scope.
// Block scope means that the variable is only accessible within the block it is declared in, such as within a function, loop, or conditional statement.
// Variables declared with let can be reassigned, but they cannot be redeclared within the same block.
// not hoisted

// const declaration:

// The const keyword is also introduced in ES6 and stands for "constant".
// Variables declared with const are block-scoped and cannot be redeclare and reassigned after they are declared.
// If the variable is an object or an array, its properties or elements can still be modified.
// not hoisted



 







// Initialization:- Initialization refers to the act of giving an initial value to a variable when it's declared.
// Assignment:-Assignment is the act of giving a new value to an already declared variable.

// declare and reassign,assign:-

// declaration of variable:-
// let a;

// reassign of variable:-
// let a=10;
// a=10;

// assign or initialization of variable:-
// let a=10;

// redeclare of variables:-
// let a=10;
// let a=20;