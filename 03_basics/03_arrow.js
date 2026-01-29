// this keyword refers to the current context

const user = {
       username : "Simar",
       price : 999,
       WelcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);  //this will run in current context 
                                                                  // in this username is inside the scope so it is in the current context
       console.log(this)  // this will print the current context                                                           
       }
}

// user.WelcomeMessage()
// user.username = "Sam"  // context change
// user.WelcomeMessage()

// console.log(this); // this will print an empty scope as it the global scope

// in browser the global scope is Windows

// function chai(){
//        let username = "Simarpal Singh"
//        // console.log(this);  // this alone will print many values like global etc etc
//        console.log(this.username);// undefined
// this does not work in function
       
       
// }
// chai()

// const chai = () => {
//        let username = "Simarpal"
//        console.log(this);  // empty parenthesis
       
// }
// chai()

// const addTwo = () => {
//        return num1 + num2   // this is explicit return
// }

// const addTwo = (num1,num2) => (num1 + num2)  // this is implicit return in which we do not need to type return

const addTwo = (num1,num2) => ({username: "Simarpal"}) // this is how you define object in an arrow function
console.log(addTwo(3,4));
