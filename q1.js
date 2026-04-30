function getVal() {
    return parseInt(document.getElementById('userInput').value);
}

function display(msg) {
    const output = document.getElementById('resultDisplay');
    output.innerText = msg;
    output.style.color = "#007bff";
}

function checkEven() {
    let num = getVal();
    if (isNaN(num)) return display("Please enter a valid number");
    display(num % 2 === 0 ? `${num} is an Even number.` : `${num} is not Even.`);
}

function checkOdd() {
    let num = getVal();
    if (isNaN(num)) return display("Please enter a valid number");
    display(num % 2 !== 0 ? `${num} is an Odd number.` : `${num} is not Odd.`);
}

function checkPrime() {
    let num = getVal();
    if (isNaN(num) || num < 1) return display("Enter a positive number > 0");
    if (num === 1) return display("1 is neither prime nor composite.");
    
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    display(isPrime ? `${num} is a Prime number.` : `${num} is not a Prime number.`);
}

function calculateFactorial() {
    let num = getVal();
    if (isNaN(num) || num < 0) return display("Enter a non-negative integer.");
    
    let fact = 1;
    for (let i = 1; i <= num; i++) fact *= i;
    display(`Factorial of ${num} is ${fact}.`);
}

function checkArmstrong() {
    let num = getVal();
    if (isNaN(num)) return display("Please enter a valid number");
    
    let temp = num;
    let sum = 0;
    let digits = num.toString().length;

    while (temp > 0) {
        let remainder = temp % 10;
        sum += Math.pow(remainder, digits);
        temp = Math.floor(temp / 10);
    }
    
    display(sum === num ? `${num} is an Armstrong number.` : `${num} is not an Armstrong number.`);
}