// --------------- Activity 1: If-Else Statements -------------

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const numArr = [1, 2, -1, -2, 18, -20, 21, 0];
const index = Math.floor(Math.random()*numArr.length);
const newNumArr = numArr[index];

if(newNumArr == 0 ) console.log(`Number is 0: ${newNumArr}`);
else if(newNumArr > 0) console.log(`Number is +ve: ${newNumArr}`);
else console.log(`Number is -ve: ${newNumArr}`);

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

const ageArr = [12,10,21,22,18,10];
const userAge = ageArr[Math.floor(Math.random()* ageArr.length)];

const voteAnalyser = (age)=> age >= 18? console.log(`Your age is: ${age}=>can VOTE!`): console.log(`Your age is: ${age}=> wait for ${18-age} yrs to VOTE!`);
voteAnalyser(userAge);