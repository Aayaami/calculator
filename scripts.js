function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a - b;
}

function operate(operator, a, b) {
    if(operator == "*") {
        return a * b;
    } else if (operator == "+") {
        return a + b;
    } else if (operator == "-") {
        return a - b;
    } else if (operator == "/") {
        return a / b;
    }
}

let displayValue = '', operator = '', numberArr = [], operatorArr = [];

var one = document.querySelector('#one');
one.addEventListener('click', () => {
  displayValue += '1';
  operator += '1';
  document.getElementById('display').textContent = displayValue;
});

var two = document.querySelector('#two');
two.addEventListener('click', () => {
  displayValue += '2';
  operator += '2';
  document.getElementById('display').textContent = displayValue;
});

var three = document.querySelector('#three');
three.addEventListener('click', () => {
  displayValue += '3';
  operator += '3';
  document.getElementById('display').textContent = displayValue;
});

var four = document.querySelector('#four');
four.addEventListener('click', () => {
  displayValue += '4';
  operator += '4';
  document.getElementById('display').textContent = displayValue;
});

var five = document.querySelector('#five');
five.addEventListener('click', () => {
  displayValue += '5';
  operator += '5';
  document.getElementById('display').textContent = displayValue;
});

var six = document.querySelector('#six');
six.addEventListener('click', () => {
  displayValue += '6';
  operator += '6';
  document.getElementById('display').textContent = displayValue;
});

var seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
  displayValue += '7';
  operator += '7';
  document.getElementById('display').textContent = displayValue;
});

var eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
  displayValue += '8';
  operator += '8';
  document.getElementById('display').textContent = displayValue;
});

var nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
  displayValue += '9';
  operator += '9';
  document.getElementById('display').textContent = displayValue;
});

var zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    if(displayValue[displayValue.length-1] == "/") {
        return 0;
    }
  displayValue += '0';
  operator += '0';
  document.getElementById('display').textContent = displayValue;
});

var add = document.querySelector('#add');
add.addEventListener('click', () => {
  displayValue += '+';
  operatorArr.push('+');
  numberArr.push(Number(operator));
  operator = '';
  document.getElementById('display').textContent = displayValue;
});

var subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {
  displayValue += '-';
  operatorArr.push('-');
  numberArr.push(Number(operator));
  operator = '';
  document.getElementById('display').textContent = displayValue;
});

var multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
  displayValue += '*';
  operatorArr.push('*');
  numberArr.push(Number(operator));
  operator = '';
  document.getElementById('display').textContent = displayValue;
});

var divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
  displayValue += '/';
  operatorArr.push('/');
  numberArr.push(Number(operator));
  operator = '';
  document.getElementById('display').textContent = displayValue;
});

var clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    displayValue = '';
    document.getElementById('display').textContent = displayValue;
    numberArr.length = 0;
    operatorArr.length = 0;
    result = undefined;
    operator = '';
});

let result;

var equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    
    numberArr.push(Number(operator));

    result = numberArr[0];
    for(let i = 0; i < numberArr.length - 1; i++) {
        result = operate(operatorArr[i], result, numberArr[i+1]);
    }

    document.getElementById('display').textContent = result;

    /*arr = displayValue.split();
    let isNumber = false, isOperator = false, number = '';
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == /"[0-9]"/) {
            isNumber = true;
            number += arr[i];
        }

        if(isNumber == true && arr[i+1] == /"[*-/+]"/) {
            isOperator = true;
            isNumber = false;
            operatorArr.push(arr[i]);
            numberArr.push(number);
            number = '';
        }
    }*/
});