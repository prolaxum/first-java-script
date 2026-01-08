const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
/*Method,Behavior
".substring(start, end)", - Extracts characters between two indices. It does not accept negative indices (treats them as 0).
".slice(start, end)",  - Similar to substring but accepts negative indices to count backward from the end of the string.
.split(separator), - "Divides a string into an array based on a pattern (e.g., gameName.split('-'))."*/


/*For your specific code const gameName = new String('hitesh-hc-com'), 
checking gameName.__proto__ reveals the "blueprint" or the collection 
of methods that the String object has access to. */