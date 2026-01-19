// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(typeof myDate);  // it is an object

//let myCreatedDate = new Date(2026 , 0 ,15,);
//let myCreatedDate = new Date(2026 , 0 ,15,5,3);
let myCreatedDate = new Date("5-4-2026");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1); // we did +1 so that the end user can get toknow exactly which month becaus ein js the months start form 0
console.log(newDate.getDay());

newDate.toLocaleString('default',{
     weekday: "long",

})// this is to customize the locale string to that we can customize our dates










