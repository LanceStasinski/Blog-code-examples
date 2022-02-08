// try {
//   console.log(dog);
//   var dog = "Fido";

//   function nameDog() {
//     var dog = "Max";
//     console.log(dog);
//   }
//   nameDog();
//   const car = "Mazda CX5";
//   const car = "Ford Explorer"; //Syntax Error - car has already been declared

//   car = "Ford Explorer"; //Type Error - assignment to a constant variable
//   console.log(car); // Mazda CX5

//   console.log(dog);
// } catch (error) {
//   console.log(error);
// }

// console.log(subtract(4, 2)); // Reference Error - cannot access 'subtract' before initialization

// const subtract = (a, b) => {
//   return a - b;
// };

// // simple invocation
// function fun() {
//   console.log(this);
// }
// fun(); // logs the global object

// // method invocation
// const obj = {
//   car: "Toyota",
//   method() {
//     console.log(this);
//   },
// };
// obj.method(); // { car: 'Toyota', method: [Function: method] }

// // indirect invocation
// function nameDog() {
//   console.log(this);
// }
// const dog = { name: "Fido" };
// nameDog.call(dog); // { name: 'Fido' }

// // constructor invocation
// function newFun() {
//   console.log(this);
// }
// new newFun(); // logs instance of newFun

// const arrowFun = () => {
//   console.log(this);
// };
// arrowFun(); // {}

// const dog = { name: "Fido" };
// arrowFun.call(dog); // {}

// const arrowFun = () => {
//   console.log(this);
// };

// arrowFun('a', 'b'); // does not return arguments

// const arrowFun = (...args) => {
//   console.log(args);
// };

// arrowFun('a', 'b'); // [ 'a', 'b' ]

// function regularFun() {
//   const arrowFun = () => {
//     console.log(arguments);
//   };
//   arrowFun();
// }

// regularFun('a', 'b') //  { '0': 'a', '1': 'b' }

const subtract = (num) => num - 1;
console.log(subtract(2));
