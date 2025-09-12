// Interview Questions
// ------------------------------------------------------------------------------------------------------------------------
// what is the difference between let const var in javascript
// 1 Var:
// Var has function scope , not block-scope so variables declared with var can be accessed outside of a block
// We can variable redeclare
// We can reassign value
//Example-
// const myfunction = () =>{
//     try {
//         var a = 100
//         var a = 50 //variable redeclare
//         a = 25 //reassign value

//         console.log(a) //25
//     } catch (error) {

//     }
// }

// myfunction()

// 2 let :
// let has block-scope , so it is only accessible within {} curley bracket
// We can not variable redeclare
// We can reassign value
// Example-
// const myfunction = () =>{
//     try {
//         var a = 100
//         var a = 50 //variable redeclare
//         a = 25 //reassign value

//         if(true){
//             let b = 22
//            // let b = 44 ==> *redeclare can not ne allowed
//            b = 66
//             console.log(b) //66
//         }

//         console.log(a) //25
//     } catch (error) {

//     }
// }
// myfunction()

// 3 const :
// Const also has block-scope and works like let
// We can not variable redeclare
// We can not reassign value
// Example-
// const myfunction = () =>{
//     try {
//         var a = 100
//         var a = 50 //variable redeclare
//         a = 25 //reassign value

//         if(true){
//             let b = 30
//            // let b = 20 ==> *redeclare can not ne allowed
//            b = 40  //==> reassign value
//              console.log(b)
//         }

//         console.log(a)
//     } catch (error) {

//     }
// }
// myfunction()
// ___________________________________________________________________________________________________________________

//Arrow Function
// An arrow function is a concise syntax introduced in ECMAScript 6 (ES6)
// for writing JavaScript functions. It provides a shorter and more compact
// way to define functions compared to traditional function expressions.
// ___________________________________________________________________________________________________________________

//setInterval
// setInterval() is a built-in JavaScript method used to repeatedly execute a
// specified function or code block at fixed time intervals. It continues to run
// until explicitly stopped using clearInterval() or until the window or environment
//  where it is running is closed.
// ___________________________________________________________________________________________________________________

//what is hooks in react js
// React Hooks are functions that allow you to "hook into" React state and lifecycle
//  features from functional components. Introduced in React 16.8, they provide a way
// to use state and other React features without writing class components.
// ___________________________________________________________________________________________________________________

//why we use props in react.js
// In React, "props" (short for properties) are a mechanism for passing data from parent
// components to child components. They are a fundamental concept for building reusable and
//  dynamic React applications.
// ___________________________________________________________________________________________________________________

// What is a spread operator in javascript  ==> (spread (...))//Sub
// function Sum (x , y, z) {
//  return x-y-z;
// };
// const numbers = [1,2,3];
// console.log(Sub(...numbers));
// ---------------------------------------------------------------------------------------------------------------------------
