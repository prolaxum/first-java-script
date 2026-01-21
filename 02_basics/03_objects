// to declare an object there are two ways: literal and singelton
// singleto is made through constructors
// object.create
// object literals
const mySym = Symbol("key1");
const JUser = {
    name : "Simar",
 "full name": "Simarpal Singh",
 [mySym] : "myKey2",
    age : 20,
    email : "simarpalsingh315@gmail.com",
    location : "Jaipur",
    isLoggedin : false,
    LastLoggedin : ["monday,tuesday"]
}
// console.log(JUser.email);
// console.log(JUser["email"]); // this one preferred beacuse in the above if we have something like full name we cannot access it by a dot
// console.log(JUser["full name"]);
// console.log(JUser[mySym]);


JUser.email = "simarpalsingh215@gmailcom"
// Object.freeze(JUser) // it means we cannot make changes now in jsuser
JUser.email = "bbbbibibfih@gmail.com"
// console.log(JUser);

JUser.greeting = function(){
    console.log("Hello Js user");
    
}
JUser.greetingtwo = function(){
    console.log(`Hello Js user, ${this.name}`); // `` this is called string interpolation
    
}
console.log(JUser.greeting());// if we don't apply () this after greeting then the output will be that function is not executed but a reference is there that a function is there
console.log(JUser.greetingtwo());



