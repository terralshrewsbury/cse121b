/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

// function add (number1, number2){
//     return number1+number2;
//     }

// let addNumber1 = Number(document.querySelector('#add1').value);
// let addNumber2 = Number(document.querySelector('#add2').value);

// function addNumbers(addNumber1,addNumber2){
//     return addNumber1 + addNumber2
// }

// document.querySelector('#sum').value = addNumbers(addNumber1, addNumber2);
// document.querySelector('#addNumbers').addEventListener('click', addNumbers)

let add = (number1, number2) => number1 + number2;

document.querySelector('#addNumbers').addEventListener('click', ()=> {

    let number1 = Number(document.querySelector('#add1').value);
    let number2 = Number(document.querySelector('#add2').value);
    let addNumbers = add(number1, number2);
    document.querySelector('#sum').value = addNumbers;
});

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
difference = number1 - number2;
return difference;
}


document.querySelector('#subtractNumbers').addEventListener('click', () => {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
} );


/* Arrow Function - Multiply Numbers */

// let multiply = (number1, number2) => number1 * number2;
// let multiplyNumbers = (factor1, factor2) => factor1 * factor2;

// let factor1 = Number(document.querySelector('#factor1').value);
// let factor2 = Number(document.querySelector('#factor2').value);

// document.querySelector('#product').value = multiply(factor1, factor2);
// document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

let multiply = (number1, number2) => number1 * number2;

document.querySelector('#multiplyNumbers').addEventListener('click', ()=> {

    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
});

/* Open Function Use - Divide Numbers */

let divide = (number1, number2) => number1 / number2;

document.querySelector('#divideNumbers').addEventListener('click', () => {

    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number (document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
})

/* Decision Structure */




document.querySelector('#getTotal').addEventListener('click', () => 
{

    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    let total = 0.00;
    
    console.log("Subtotal:", subtotal);
    console.log("Is member checked:", document.querySelector('#member').checked);

    if (document.querySelector('#member').checked) {
        discount = subtotal* .15;
        total = subtotal - discount;
    }
    else
    {
        total = subtotal;
    }
    
    console.log("Total:", total);
    document.querySelector('#total').innerText = '$' + total.toFixed(2);


});


/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */

document.querySelector('#array').innerText = numbersArray;

/* Output Odds Only Array */
let odds= [];
let evens =[];

    for (let number of numbersArray){
        if (number % 2 == 0) {
            odds.push(number);
        } else {
            evens.push(number);
        }
    }

    

document.querySelector('#odds').innerText = odds;


/* Output Evens Only Array */

document.querySelector('#evens').innerText = evens;
    


/* Output Sum of Org. Array */

let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */

let multipliedArray = numbersArray.map(number => number *2);
document.querySelector('#multiplied').innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */

let sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;


