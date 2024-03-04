let display = document.getElementById('display');

function getDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value='';
}
function calculate(){
    display.value=eval(display.value)
}
