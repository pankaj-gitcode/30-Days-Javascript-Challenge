// Task 1: Write a program to add two numbers and log the result to the console.

// const { stdout } = require('process');

const num1 = 2;
const num2 = 4;
const num1AddNum2 = num1 + num2;
console.log("num1 + num2 => 2 + 4 = ", num1AddNum2);

// Task 2: Write a program to subtract two numbers and log the result to the console.
console.log("\nnum2-num1=> 4-2= ", num2-num1);

// Task 3: Write a program to multiply two numbers and log the result to the console.
console.log(`\nnum1 x num2=> 2x4= ${num1*num2}`);

// Task 4: Write a program to divide two numbers and log the result to the console.
console.log(`\nnum1 ➗ num2=> 2 ➗ 4= ${num1/num2}`);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
console.log(`\nnum1 % num2=> 2 % 4= ${num1 % num2}`);

// ----------------- Activity 2: Assignment operator ----------------------
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let var1 = 5;
var1 += 1;
console.log(`\n\nvar1 += 1 => 5 + 1= ${var1}`);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
var1 -= 2;
console.log(`\nvar1 -= 2 => 6 - 2= ${var1}`);

// ------------------ Activity 3: Comparison Operators -------------------
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
const var2 = 5;
const var3 = 6;
const gr = var2 > var3;
const ls = var2 < var3;

console.log(`\n${var2} > ${var3} = ${gr}\n${var2} < ${var3} = ${ls}`);


// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
const var4 = 6;
console.log(`\n${var2} >= ${var3}= ${var2 >= var3}\n${var3} >= ${var4} = ${var3 >= var4}\n${var2}>=${var4} = ${var2 >= var4} `);
console.log(`\n${var2} <= ${var3}= ${var2 <= var3}\n${var3} <= ${var4} = ${var3 <= var4}\n${var2}<=${var4} = ${var2 <= var4} `);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
const var5 = 1;
const var6 = '1';

console.log(`\n1st: data type conversion takes place\n2nd: value comparison takes place\n1 == '1'=> ${var5 == var6}`);
console.log(`\nStrictly data type and value comparision takes place\n1 === '1'=> ${var5 === var6}`);
 
 
// ----------------------- Activity 4: Logical Operators -----------------------

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
const elem = [1,4,12,35,76,82,99];
const elemIndex = Math.floor(Math.random() * elem.length);
const finalNum = elem[elemIndex];

if(finalNum >= 1 && finalNum <=76)console.log(`&&: 1 >= ${finalNum} <= 76`);
else console.log(`&&: ${finalNum} > 76`);

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
if(finalNum >= 1 || finalNum <=76)console.log(`||: 1 >= ${finalNum} <= 76`);
else console.log(`||: ${finalNum} > 76`);

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
const gamePlayed = [true, false];
const tossed = Math.floor(Math.random() * gamePlayed.length);
const finalRes = gamePlayed[tossed];
console.log(`\ngamePlayed: ${finalRes}`);
console.log(`!gamePlayed: ${!finalRes}`);

// -------------------------- Activity 5: Ternary Operator ------------------------------

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
const numArry = [1,2,-1, -9, 8];
const numIndex = Math.floor(Math.random()* numArry.length);
const final = numArry[numIndex];
final < 0? console.log(`\nnumber is -ve: ${final}`): console.log(`\nnumber is +ve: ${final}`);

// ------------------------- Feature Request -----------------------------------------

// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

const numArray = [2,4,8,6];
const firstNum = numArray[Math.floor(Math.random()*numArray.length)];
const secondNum = numArray[Math.floor(Math.random()*numArray.length)];

const cal = (num1, num2)=>{
    const res = {
        sum: num1 + num2,
        sub: num1 - num2,
        mul: num1 * num2,
        div: num1 / num2,
        rem: num1 % num2
    }
    return res;
}
console.log("\n",`Num1 = ${firstNum} and Num2 = ${secondNum} `,cal(firstNum, secondNum));

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

const comp = (num1, num2)=>{
    const res = {
        gt: num1 > num2,
        lt: num1 < num2,
        eq: num1 == num2,
        ge: num1 >= num2,
        le: num1 <= num2,
        ne: num1 != num2
    }

    const finalArr = Object.entries(res).find(e=>e.map(e=> e === true));
    return finalArr;

    
}
console.log(`\n Comparison operators: Num1 = ${firstNum} & Num2 = ${secondNum}, ${comp(firstNum, secondNum)}`)