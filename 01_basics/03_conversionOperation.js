let score = "33abc"  // if null then the first two cl will be object the third one will be number and the last log will be 0
                    // if undefined then the first two cl will be undefined the third one will be number and the last log will be NaN
//console.log(typeof score);// string
//console.log(typeof(score));//string

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);//number
//console.log(valueInNumber);//NaN  Not a Number

// "33" => 33
// "33abc" => NaN
// true => 1; false => NaN

let isLoggedIn = "Simar"
let booleanisLoggedIn = Boolean(isLoggedIn)
//console.log(booleanisLoggedIn);
// 1 => true 0 => false
// "" => false 
// "simar" => true

let someNumber = 33

let stringnumber = String(someNumber)
//console.log(typeof stringnumber);
//console.log(stringnumber);
   
// ****************************operations****************************************

let value = 3
let negValue = -value
//console.log(negValue);


/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); this means 2 raise to the power 3
console.log(2/3);
console.log(2%3); remainder
*/

let str1 = "Hello"
let str2 = " Simarpal"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);// if the string is at the starting so it will treat all the other numbers as string
// console.log(1 + 2 + "2");// if the string is on the last then the first two operations will be held

console.log(+true); // output = 1
console.log(+""); // output = 0







