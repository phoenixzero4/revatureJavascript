
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
