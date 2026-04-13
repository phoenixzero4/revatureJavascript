
/** 
 * When creating variables you use var, let or const. 
 *   var is function scoped, meaning it is only accessible within the function it was declared in.
 *   var is the original way to declare variables in JavaScript, but it has some quirks that can lead to unexpected behavior, such as hoisting and variable shadowing.
 *   
 *   let and const are block scoped, meaning they are only accessible within the block they were declared in (e.g. within a loop or an if statement).
 * 
 *   let -> preferred way to declare variables that can be reassigned.
 *  const -> preferred way to declare variables that cannot be reassigned.
 */

// Hoisting example with var
console.log(hoistedVar); // undefined
var hoistedVar = 'I am hoisted';
console.log(hoistedVar); // I am hoisted

// Hoisting example with let
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let changeableVar;
console.log(changeableVar); // undefined
changeableVar = 'I will not hoist';
console.log(changeableVar); // I will not hoist


// Const variables cannot be reassigned
const staticVar = 'This cannot change';
staticVar = 'Trying to change, but this will not work'; // TypeError: Assignment to constant variable.

// Note: objects can have their properties changed even if they are declared with const, but the variable (reference) itself cannot be reassigned to a different object.

const myObj = { prop1: 'first', prop2: 'second' };

/* There is also function scope and block scope. 
    * Function scope means that variables declared within a function are only accessible within that function.
*/

function myFunction() {
    const greeting = 'Hello, World!';
    console.log(greeting); // Hello, World!
    // we can reference the global variable here also
    console.log(globalVar); // I am global
}

myFunction();
// console.log(greeting); // ReferenceError: greeting is not defined

/* Block scope means that variables declared within a block (e.g. within an if statement or a loop) are only accessible within that block. */

const x = 5;
const y = 10;

if (x < y) {
    const message = 'x is less than y';
    console.log(message); // x is less than y
}
// console.log(message); // ReferenceError: message is not defined

/* The last commonly referenced scope is the 'lexical scope' which refers to the fact that functions can access variables from their parent scopes. */

function outerFunction() {
    const lexicalVar = 'I am from the outer function';

    function innerFunction() {
        let functionVar = 'I am from the inner function';
        console.log(functionVar); // I am from the inner function
        console.log(lexicalVar); // I am from the outer function
    }
    return innerFunction;
}

const inner = outerFunction();
inner();