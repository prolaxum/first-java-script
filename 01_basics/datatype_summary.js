//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//*********************** Memory allocation ************************************
// Stack (Primitive)  Heap(Non-primitive)
let myname = "Simarpal Singh"
let anothername = myname
 anothername = "chaiaurcode"
console.log(myname);
console.log(anothername);

let userOne = {
    email :  "simarpalsingh215@gmail.com",
    upi : "user@oksbi"
}

let userTwo = userOne

userTwo.email = "hithere@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



