// Immediately Invoked Function Expressions (IIFE)

// ()() THE first parenthesis is about function definiton and the second is about function exection

(function chai(){
    // this is named iife
    console.log(`Database conncected`);
    
})(); // we do this to avoid disturbance from the global scope so that our function is not polluted
// semi colon is important because if we miss it the next iife will not execute

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Simarpal Singh")