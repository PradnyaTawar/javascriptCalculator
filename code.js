

function calc() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operator = document.getElementById("operators").value;

    if (operator === '+') {
        document.getElementById("result").value = num1 + num2;

    }
    if (operator === '-') {
        document.getElementById("result").value = num1 - num2;

    }
    if (operator === '*') {
        document.getElementById("result").value = num1 * num2;

    }
    if (operator === '/') {
        document.getElementById("result").value = num1 / num2;

    }
   
}
function clearAnswer() {
    document.getElementById("result").value = "";
    }
