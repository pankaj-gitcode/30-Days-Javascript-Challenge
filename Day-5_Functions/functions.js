// const readline = require('readline').createInterface({input:process.stdin, output:process.stdout});
// let num;
// const usersChoice = ()=>{
    
//     return new Promise((resolve, reject)=>{
//         readline.question(`Enter a number: `, resolve);
//     })
// }
// (async function(){
//     try{

//         const num = parseInt(await usersChoice());
//         // checkEvenOdd(num);
//     }
//     catch(err){console.log(err.message)} 
//     finally{readline.close()}

// })()

// ---------------------- Activity 1: Function Declaration ------------------------
// . Task 1: Write a function to check if a number is even or odd and log the result to the console.
const checkEvenOdd = (num)=>num % 2 ==0? console.log(`${num} is EVEN`): console.log(`${num} is ODD`);

// . Task 2: Write a function to calculate the square of a number and return the result.
const squareFunc = (n)=>{
    const sqr = Math.pow(n,2);
    return sqr
}
// console.log("Power of 25:",squareFunc(25));

// ---------------------- Activity 2: Function Expression ------------------------

// . Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const maxOfTwoNum = (num1, num2)=>num1>num2?`${num1} is greater than ${num2}`: `${num2} is greater than ${num1}`;
// console.log(maxOfTwoNum(402020, 120212));

// . Task 4: Write a function expression to concatenate two strings and return the result.
const concatFunc = (num1, num2)=>`${num1}` + `${num2}`;
// console.log(`COncatination of 828 & 676 is ${concatFunc(828, 676)}`);

// ---------------------- Activity 3: Arrow Functions ------------------------

// . Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const numArry = [1,2,12,13,17,15,19,0];
const n1 = numArry[Math.floor(Math.random()*numArry.length)];
const n2 = numArry[Math.floor(Math.random()*numArry.length)];

const sumOfTwoNums = (num1, num2)=>num1+num2;
console.log(`Sum of ${n1} & ${n2}: ${sumOfTwoNums(n1,n2)}`)

// . Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const charIncluded = (char)=>{
    const str = 'hello raj';
    return str.includes(char)
}
// console.log(charIncluded('hello'));

// ---------------------- Activity 4: Function Parameters and Default Values ------------------------

// . Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const multiplicationFunc = (a, b=2)=>{
    const res = parseInt(a * b);
    return res
}
console.log("Multiplication of 5x1: ", multiplicationFunc(5,1));

// . Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greetingsFunc = (name, age)=>console.log(`Hi ${name}, You must be ${age} years. old to join this party!`);
console.log(greetingsFunc('Raj', 18));

console.log("dirname: ",__dirname);

// ---------------------- Activity 5: Higher-Order Functions ------------------------

// . Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.


// . Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.