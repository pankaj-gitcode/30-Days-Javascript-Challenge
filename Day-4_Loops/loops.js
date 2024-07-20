
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

// ------------------------ Activity 3: Do ... While Loop -------------------

// . Task 5: Write a program to print numbers from 1 to 5 using a do ... while loop. do{logic}while(condition);
const print1To5 = (n)=>{
    let num = 1;
    do{
        console.log(num);
        num +=1;
    }while(num <n);
    return num;
}
// console.log(print1To5(5))

// . Task 6: Write a program to calculate the factorial of a number using a do ... while loop.

const factN = (n)=>{
    // 4! = 4x3x2x1
    let fact = 1;
    for(let i=n; i>0; i--){
        
        fact = fact * i;
    }
    
    return fact
}
// console.log(`Factorial of ${factN(4)}`)
const factorial = (num)=>{
    let fact = 1;
    do{
        fact = fact * num;
        num--;
    }while(num>=1);
        console.log(fact)
}
// console.log(`Factorial of ${factorial(5)}`)


// -------------------- Activity 4: Nested Loops --------------------------

// . Task 7: Write a program to print a pattern using nested for loops:
let star = '*';
const rightAngledTriangle = ()=>{

    for(let row=1; row<6; row++){
        let str = '';
        
        for(let j=1; j<=row; j++){
            str += star
        }
        // console.log("\n")
        
        console.log(str)
        // return str;
    }
}
// console.log(rightAngledTriangle())

// -------------------- Activity 5: Loop Control Statements -------------------------

// . Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
    const skipFunc = ()=>{
        for (i=1; i<=10; i++){
            if(i==5){
                continue;
            }
            console.log(i)
        }
    }
    skipFunc();

// . Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.


  






// -------------------- Activity 5: Loop Control Statements -----------------

// . Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

// . Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.