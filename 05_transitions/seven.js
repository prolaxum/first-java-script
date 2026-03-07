const myNumbers = [1,2,3,4,5]
// const newNums = myNumbers.map((nums) => {return nums + 10})

const newNums = myNumbers.map((num) => num * 10).map((num) => num +1).filter((num) => num >= 23)
console.log(newNums);
