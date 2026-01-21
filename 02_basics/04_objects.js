//const tinderUser = new Object()  this is the singleton way
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "anjanay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularuser = {
            email: "simarpalsingh215@gmail.com",
             fullname: {
                username : {
                         firstname : "Simar",
                         lastname : "Singh"
                }

             }
}

// console.log(regularuser.fullname.username.firstname);
// to merge two objects we do these

const obj1 = {1 : "a" , 2: "b"}
const obj2 = {3 : "a" , 4: "b"}
const obj3 = {5 : "a" , 6: "b"}

// const obj4 = Object.assign({},obj1,obj2,obj3)// we did the first one as {} so that it is the target object and all the other ones are source objects
// the other way is
const obj4 = {...obj1,...obj2} // spread operator
// console.log(obj4);

const users = [
    {
         id : "123abc",
         email :  "djbvffvj@gmail.com"
    },
     {
         id : "123abc",
         email :  "djbvffvj@gmail.com"
    },
     {
         id : "123abc",
         email :  "djbvffvj@gmail.com"
    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));

const course = {
    coursename : "operating system",
    price : "999",
    courseinstructor : "simarpal"
}
// const {courseinstructor} = course
const {courseinstructor : instructor} = course // same value // object destructure
console.log(instructor);

// api
//An API (Application Programming Interface) is a way for two software programs to talk to each other in a controlled and structured manner.

