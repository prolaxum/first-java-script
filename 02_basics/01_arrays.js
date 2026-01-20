const myArr = [0,1,2,3,4,5,6,7,8,9]

// javascripts arrays are resizable and can contain a mix of different data types
// array elements cannot be accessed using arbitary strings as indexes and the arrays indexing
// starts with zero
// arrays in js copy operations make shallow copies
// shallow copies of an obejct is a copy whose properties share the same references(point to the same underlying values) as those of the source object from which the copy was made
// deep copies of an object is a copy whose properties do not share the same references

const myHeroes = ["spiderman","superman"]

const myArr2 = new Array(1,2,3,4) // three ways to declare an array

// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
//myArr.shift()

// console.log(myArr);
// console.log(myArr.indexOf(4));
// console.log(myArr.includes(9));

const newArr = myArr.join()     // it make the type of array into string

// slice and spice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr);


// the difference between slice and spice is that in slice if we write 1 to 3 then 1 and 2 will get print and 3 will notbe included
// in splice if we writ 1 to 3 then 3 gets include but in main array 1 2 3 will be cut and the rest others will get printed
// in short slice does not affect the main array but splice does


