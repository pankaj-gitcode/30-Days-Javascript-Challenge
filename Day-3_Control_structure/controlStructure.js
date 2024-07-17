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

// -------------- Activity 2: Nested If-Else Statements ---------------------

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
const numbersArr = [12,21,25,52,76,99];
const numFunc = ()=>numbersArr[Math.floor(Math.random()*numbersArr.length)];
const num1 = numFunc();
const num2 = numFunc();
const num3 = numFunc();

const largestNum = ()=> [num1,num2,num3].reduce((accum, elem)=>{
    return(
        accum>elem? accum : elem 
    )
});
console.log(`Largest sum is: ${[num1,num2,num3]} is ${largestNum()}`);

// ----------------- Activity 3: Switch Case ---------------------------

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

//import readline
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  //new promise
  const userChoice = ()=>{
    return new Promise((resolve, reject)=>{
      readline.question(`Enter any weekdays[1-7]: `, resolve)
    })
  }
  
  //switch function
  const weekDays = (num)=>{
    switch(true){
      case num == 1:
        console.log(`1=>Monday`);
        break;
      case num ==2:
        console.log(`2=>Tuesday`);
        break;
      case num == 3:
        console.log(`3=>Wednesday`);
        break;
      case num == 4:
        console.log('4=>Thursday');
        break;
      case num == 5:
        console.log(`5=>Friday`);
        break;
      case num == 6:
        console.log(`6=>Saturday`);
        break;
      case num == 7:
        console.log(`7=>Sunday`);
        break;
      default:
        console.log(`${num} is INVALID CHOICE!!`);
    }
  }
  
  //async/await
  (async function(){
    try{
      
    const day = parseInt(await userChoice());
    weekDays(day);
    }
    catch(err){console.log(`ERROR: ${err.message}`)}
    finally{readline.close()}
  })()

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.

// const rl = require('readline').createInterface({input:process.stdin, output:process.stdout});

// //grade function
// const gradeFunc = (grades)=>{
//     const grade = grades.toLowerCase();
//     switch(true){
//         case grade == 'a':
//             console.log(`\nA=>Outstanding`);
//             break;
//         case grade == 'b':
//             console.log('\nB => Excellent');
//             break;
//         case grade == 'c': 
//             console.log(`\nC=>Good`);
//             break;
//         case grade == 'd':
//             console.log('\nd=>Can Be Better');
//             break;
//         case grade == 'e':
//             console.log(`\ne=>Try again`);
//             break;
//         default:
//             console.log(`\nINVALID CHOICE`);
//     }
// }

// //promise
// const usersChoice = ()=>{
//     return new Promise((resolve, reject)=>{
//         rl.question(`Enter your grade: `, resolve)
       
//     })
//     .then(grade=>gradeFunc(grade))
//     .catch(err=>console.log(err))
//     .finally(()=>rl.close());
// }
// //Invoke userChoice()
// usersChoice();


const rl = require('readline').createInterface({input:process.stdin, output:process.stdout});

//grade function
const gradeFunc = (grades)=>{
    const grade = grades.toLowerCase();
    switch(true){
        case grade == 'a':
            console.log(`\nA=>Outstanding`);
            break;
        case grade == 'b':
            console.log('\nB => Excellent');
            break;
        case grade == 'c': 
            console.log(`\nC=>Good`);
            break;
        case grade == 'd':
            console.log('\nD=>Can Be Better');
            break;
        case grade == 'e':
            console.log(`\nE=>Try again`);
            break;
        default:
            console.log(`\nINVALID CHOICE`);
    }
}

//promise
const usersChoice = ()=>{
    return new Promise((resolve, reject)=>{
        rl.question(`Enter your grade: `, resolve)
        
    })
    .then(grade=>gradeFunc(grade))
    .catch(err=>console.log(err.message))
    .finally(()=>rl.close())
}
usersChoice();




// --------------------- Activity 4: Conditional (Ternary) Operator ---------------------
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
const findOddEven = ()=>{
    let num = [];
    for(let i=0; i<=100; i++){
        num.push(i);
    }
    const numArr = num[Math.floor(Math.random()*num.length)];
    return numArr%2 == 0?`${numArr} is EVEN`:`${numArr} is ODD`
}
console.log(findOddEven())




// --------------------- Activity 5: Combining Conditions ----------------------------

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
const years = [1960, 1900, 2020, 2024, 2021, 2000, 2001, 2002];
const leapYear = (year)=>{
    console.log(`${year} checking LEAP YEAR or not...`)
    if(year%4==0){
        if(year % 100 != 0){
            if(year % 4 == 0){
                return `${year} is a LEAP YEAR`
            }
            else return `${year} is NOT a LEAP YEAR`
        }
        else return `${year} is NOT a LEAP YEAR`
    }
    else { return `${year} is not a LEAP YEAR`}
}
console.log(leapYear(years[Math.floor(Math.random()*years.length)]))