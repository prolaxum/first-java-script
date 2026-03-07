const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby", 
    swift : "swift by apple"
}
for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
      
}
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
    
}
//In JavaScript, we usually don’t use for...in for Map objects because for...in is designed to iterate over object property keys, not over the entries of a Map.