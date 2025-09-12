// Interview Questions

// what is the difference between let const var in javascript
// 1 Var:
// Var has function scope , not block-scope so variables declared with var can be accessed outside of a block
// We can variable redeclare
// We can reassign value

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

//Arrow Function
// setInterval
//controlled and uncontrolled components in react js
//what is hooks in react js
//why we use props in react.js

// What is a spread operator in javascript  ==> (spread (...))//Sub

// function Sum (x , y, z) {
//  return x-y-z;
// };

// const numbers = [1,2,3];

// console.log(Sub(...numbers));
