const score = 400
//console.log(score);


const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length)
//console.log(balance.toFixed(3));

const otherNumber = 123.867930

//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

// ****************************** Maths ********************************************
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,6,2,7));
// console.log(Math.max(5,6,7,3));

console.log(Math.random()); // numbers between 0 and 1
console.log((Math.random()*10) + 1); // we did multiply by 10 because we want the random number to be greater than values between 0-1
console.log(Math.floor((Math.random()*10) + 1)); // we did +1 for the case of 0.01

const min = 10
const max = 20

console.log(Math.floor((Math.random())*(max - min + 1)) + min);
