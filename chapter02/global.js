// runing code browser
// const a = 10;
// console.log(window.a);

// function test() {
//   console.log('Hello Node Js');
// }
//window.test();

// runing code tarminal
// const a = 10;
// console.log(global.a);

// function test() {
//   console.log('Hello');
// }
// global.test();


// can't use import. i can use require
const { add } = require('./math');

console.log(add(3, 2));