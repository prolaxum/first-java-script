function sayMyName(){
    console.log("S");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("R");
    
}
// sayMyName()
// function addTwoNumbers(number1,number2){   //number 1 and number 2 are parameters
//     console.log(number1+number2);
    
// }
// addTwoNumbers(3,4)  //3 and 4 are arguments
// addTwoNumbers(3,null)
// addTwoNumbers(3,"4")

function addTwoNumbers(number1,number2){ 
    //    let result = number1 + number2
    //    return result
    return number1+number2 // if we try to use console log after return then it will not execute

}
const result = addTwoNumbers(5,6)
// console.log("Result : ", result);

function loginUserMessage(username){
    // if(username === undefined){ 
    if(!username){  // other way to write what is written above
        console.log("Please enter a name");
        return
        
    }
    return `${username} just logged in`

}
// console.log(loginUserMessage("Simarpal Singh"))
console.log(loginUserMessage());

function calcualteCartPrice(val1,val2,...num1){   // ...num1 is a rest operator which meansit collect multiple values in a single variable(araay or variable)
    return num1
}
// console.log(calcualteCartPrice(400,200,3000,4000));

const user = {
    name : "Simarpal",
    price : 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject( {
    name : "sam",
    price : 399
    })

const myNewArray = [100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100,200,200,100]));

