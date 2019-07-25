//Fahrenheit to Celsius Calculator
'use strict'

//Event Listeners
document.getElementById('btn').addEventListener('click', button);

//Event Functions
function button() {
    //Input
    let fah = document.getElementById('fah').value;
    //Process
    let result = (fah - 32) * 5/9;
    result *=100;
    result = Math.floor(result);
    result /=100;
    //Output
    document.getElementById('answer').innerHTML = result;
}

