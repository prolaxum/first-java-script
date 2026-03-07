// for of loop
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const i of arr) {
    //console.log(i);
     
}

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`each char is ${greet}`);
    
}
//maps

const map = new Map()  // it will give unique values hat is the values will not be repeated and it will print the pairs in order
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
// console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-' , value); 
}
// this is the loop for maps and it is iteratable

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-' , value); 
// }

// it will not run as objects are not iteratable
