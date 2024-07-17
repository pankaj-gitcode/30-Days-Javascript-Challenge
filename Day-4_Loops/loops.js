
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
    console.log(sum)
}
console.log([i,sum])




// . Task 4: Write a program to print numbers from 10 to 1 using a while loop.