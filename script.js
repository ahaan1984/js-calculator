function add(a,b) {
    return parseFloat(a)+parseFloat(b)              /*The parseFloat() converts string to float.*/
}
function subtract(a,b){
    return parseFloat(a)-parseFloat(b)
}
function multiply(a,b){
    return parseFloat(a)*parseFloat(b)
}
function divide(a,b){
    return parseFloat(a)/parseFloat(b)
}

function operate(operator,firstArg,secondArg){
    switch(operator){
        case '+':
            return add(firstArg,secondArg);
        case '-':
            return subtract(firstArg,secondArg);
        case '*':
            return multiply(firstArg,secondArg);
        case '/':
            return divide(firstArg,secondArg);
    }   
}