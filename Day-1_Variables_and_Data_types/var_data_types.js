// . Task 1: Declare a variable using var , assign it a number, and log the value to the console. 

var num = 97;
console.log(num);

// . Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let str = 'Raj';
console.log(str);

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const test = true;
console.log(test);

//  Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
const num2 = 11;
const str2 = 'Mac';
const test2 = false;
const obj1 = {name: 'JS'};
const arr1 = [1,'Raj', 'Goa'];

const vars = [num2, str2, test2, obj1, arr1];
for(let i=0; i<vars.length; i++){
    console.log(`typeof: ${vars[i]}=> ${typeof vars[i]}`);
}
//   Task 5: Declare a variable using 1et, assign it an initial value, reassign a new value, and log both values to the console.
let var1 = 'jack';
console.log(`\nInitial value: let var= ${var1}`);
var1 = 'joe';
console.log(`Reassigned value: var= ${var1}`);


//   Task 6: Try reassigning a variable declared with const and observe the error.
try{

    const var2 = 'Raj';
    console.log(`\nInitial \'const\' value: ${var2}`);
    var2 = 'john';
    console.log(`after \'const\' value: ${var2}`);
}
catch(err){ console.error(`ERROR: ${err.message}`)}


