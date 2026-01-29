//var c = 300  // everything outside the block scope is global scope
let a =300
if(true){
    let a = 10
    const b = 20   // this is the block scope
   // var c = 30
     // console.log("Inner a is:" , a);
    
}

// console.log(a); //it will show an error because it is already done in if statemet
// console.log(b); it will also show error because of the same reason as above
// console.log(c); // it will not show an error and this is the problem in javascript that's why we don't write var
function one(){
     const userName = "Simarpal Singh"
     function two(){
      const website = "youtube"
      console.log(userName);
      
     }
    //  console.log(website);
     
     two()
}
// one()

if(true){
     const username = "Simarpal Singh"
     if(username === "Simarpal Singh"){
          const website = "youtube"
          // console.log(username + website);
          
     }
     // console.log(website); // this will generate an error
}
// console.log(username);  // this will also generate an error

// ++++++++++++++++++++++++++++++++++++ intersting ++++++++++++++++++++++++++++++++++
addOne(5)   // this will not generate an error if we do console log
 function addOne(num){
     return num + 1
}

addTwo(5)   // this will generate an error beacuse of hoisting if we console log
const addTwo = function(num){
     return num + 1
}

