var operatorArray = [];
var integerArray = [];
var answerArray = [];
var stringArray = [];
var result = 0;
var functionCallCount = 0;

function display(number) {
    stringArray.push(number);
    document.getElementById("showInput").innerHTML += number;
}

function createIntArray() {
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i] !== "+" && stringArray[i] !== "-" && stringArray[i] !== "x" && stringArray[i] !== "/") {
            var num = parseInt(stringArray[i]);
            if (!isNaN(num)) {
                integerArray.push(num); // Parse and push integers to the array
            }
        } else {
            operatorArray.push(stringArray[i]); // Operators in one array
        }
    }
}

function add() {
    if (functionCallCount === 0) {
        result = integerArray[1] + integerArray[0];
        answerArray.push(result);
        functionCallCount++;
    } 
    else {
        result = integerArray[integerArray.length-1] + answerArray[answerArray.length-1];
    }  

    document.getElementById("showInput").innerHTML = result;
}

function subtract() {
    if (functionCallCount === 0) {
        result = integerArray[0] - integerArray[1];
        answerArray.push(result);
        functionCallCount++;
    } else {
        result -= integerArray[integerArray.length - 1];
    }

    document.getElementById("showInput").innerHTML = result;
}

function multiply() {
    if (functionCallCount === 0) {
        result = integerArray[0] * integerArray[1];
        answerArray.push(result);
        functionCallCount++;
    } else {
        result *= integerArray[integerArray.length - 1];
    }
    document.getElementById("showInput").innerHTML = result;
}

function divide() {
    
    if (functionCallCount === 0) {
        result = integerArray[0] / integerArray[1];
        answerArray.push(result);
        functionCallCount++;
    } else {
        result /= integerArray[integerArray.length - 1];
    }
    document.getElementById("showInput").innerHTML = result;
}

function calculate() {
    createIntArray();
    var operator = operatorArray[operatorArray.length-1]; 
    switch (operator) {
        case "+":
            add();
            break;
        case "-":
            subtract();
            break;
        case "x":
            multiply();
            break;
        case "/":
            divide();
            break;
        default:
            break;
    }
    console.log(answerArray);
    console.log(integerArray);
    console.log(operatorArray);
    console.log(stringArray);
}

function clearInput() {
    document.getElementById("showInput").innerHTML = "";
    stringArray = [];
    integerArray = [];
    operatorArray = [];
    answerArray = [];
    functionCallCount = 0;
}
