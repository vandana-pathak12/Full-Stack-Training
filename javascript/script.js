// console.log('My first JavaScript file is connected!');
// alert('Welcome to JavaScript, ' + 'vandana pathak');

// const fullName = "Vandana Pathak"; // string
// let age = 19; // number
// const isStudent = true; // boolean
// let favoriteColor; // undefined
// const pet = null; // null

// console.log(`Name: ${fullName}, type: ${typeof fullName}`);

// console.log(`Age: ${age}, type: ${typeof age}`);

// console.log(`Is Student: ${isStudent}, type: ${typeof isStudent}`);

// console.log(`Favorite Color: ${favoriteColor}, type: ${typeof favoriteColor}`);

// console.log(`Pet: ${pet}, type: ${typeof pet}`);


// const num1 = 25;
// const num2 = 4;
// console.log(`Sum: ${num1 + num2}`);
// console.log(`Difference: ${num1 - num2}`);
// console.log(`Product: ${num1 * num2}`);
// console.log(`Quotient: ${num1 / num2}`);
// console.log(`Remainder: ${num1 % num2}`);
// console.log(`Power: ${num1 ** 2}`);

// const value = '100px';
// const num = parseInt(value);
// const result = num + 50;
// console.log(result);

//practical 4
// const score = 83;
// if (score >= 90) {
//     console.log("Grade: A");
// }
// else if (score >= 80) {
//     console.log("Grade: B");
// }
// else if (score >= 70) {
//     console.log("Grade: C");
// }
// else if (score >= 60) {
//     console.log("Grade: D");
// }
// else {
//     console.log("Grade: F");
// }

// const dayNumber = 5;
// switch (dayNumber) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Invalid day number");
// }

// const  dayNumber = 6;

// if (dayNumber === 6 || dayNumber === 7) {
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

//practical 5 fizzbuzz

// for (let i = 1; i <= 30; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }

//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }

//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }

//     else {
//         console.log(i);
//     }

// }

//using while
// let i = 1;

// while (i <= 30) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }

//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }

//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }

//     else {
//         console.log(i);
//     }

//     i++;
// }

//practical 6 build a mini calculator using function 

// Function Declaration
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Arrow Functions
const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// BMI Function
function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
}

// Testing
console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(multiply(4, 6));
console.log(divide(20, 5));
console.log(divide(20, 0));
console.log(calculateBMI(60, 1.6));

//PRACTICAL 7: Process a List of Students with Array Methods