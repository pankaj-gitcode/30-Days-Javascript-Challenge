
// -------------------- Activity 1: For Loop ------------------------

// . Task 1: Write a program to print numbers from 1 to 10 using a for loop.
const print1To100 = ()=>{
    console.log(`Numbers from 1 to 10:`)
    for (let i=1; i<=10; i++){
        console.log(i);
    }
}
// print1To100()

// . Task 2: Write a program to print the multiplication table of 5 using a for loop.
const multiplicationTableOf5 = ()=>{
    console.log("\nMultiplication table of 5:");
    for(let i=1; i<=10; i++){
        const res = 5 * i ;
        console.log(`5 x ${i} = ${res}`);
    }
}
// multiplicationTableOf5();


// -------------------- Activity 2: While Loop ------------------------

// . Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let gamePlayed = true;
let i = 1;
let sum = 0;
while(gamePlayed){
    if(i< 11){
        sum = sum + i;
        i++;
    }
    else gamePlayed = false;
    // console.log(sum)
}
console.log([i,sum])


// . Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let gamePlaying = true;
let num = 10;
while(gamePlaying){
    if(num>0){
        // console.log(num);
        num--;
    }
    else gamePlaying = false;
}


// -------------------- Activity 4: Nested Loops --------------------------

// . Task 7: Write a program to print a pattern using nested for loops:
let star = '*';
const rightAngledTriangle = ()=>{

    for(let i=1; i<6; i++){
        let str = '';
        
        for(let j=1; j<=i; j++){
            str += star
        }
        // console.log("\n")
        
        console.log(str)
        // return str;
    }
}
// console.log(rightAngledTriangle())

function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
      let str = '';
      for (let j = 1; j <= n - i; j++) {
        str += ' '; // Adding spaces
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        str += '*'; // Adding stars
      }
      console.log(str);
    }
  }
  
  printPyramid(5);
  






// -------------------- Activity 5: Loop Control Statements -----------------

// . Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

// . Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.