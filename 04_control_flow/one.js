// if
const isUserLoggedIn = true
const temperature = 41
// if (temperature === 40) {      // if the cindition is true then only the code in the scope will get executed
//    console.log("the temperature is less than 50");
   
// }else{
//     console.log("the temperature is greater than 50");
    
// }
// console.log("execute");


// <, >, == , <=,>=,!=,=== this one also checks the type

// const score = 200
//  if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
//  }
//  console.log(`User power: ${power}`);  if there was var instead of let then both the console logs would have been executed as it has global execution
 
// const balance = 1000
// // if(balance > 500) console.log("test"), console .log("test2");  this is the implicit notation in which we do not have to write scope but we have to write the logs in one line or if we have to write in multiple lines then we have to make a comma then write the other log in the next line

// if(balance < 500){
//     console.log("the balance is less than 500");
// }
// else if(balance < 750){
//     console.log("the balance is less than 750");
    
// }
// else if(balance < 900){
//     console.log("the balance is less than 900");
    
// }
// else{
//     console.log("the balance is less than 1200");
    
// }
let UserLoggedIn = true
let debitCard = true
let loggedInFromGoogle = true
let loggedInFromEmail = false
if(UserLoggedIn && debitCard && 2==2){                  // this is the and operator in which all the condiitions should be true then only the code will get executed
    console.log("the user is logged in");
    
}
if(loggedInFromGoogle || loggedInFromEmail){              // this si the or operator in which if only one condition is true then the code will run
    console.log("the user is logged in");
    
}