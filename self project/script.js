const inputBox = document.getElementById('inputBox')
const outputBox = document.getElementById('outputBox')
inputBox.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        outputBox.value = inputBox.value;
        inputBox.value ='';
    }
})