//
// Values are basically a piece of data so its the most fundamental unit of information in programming eg
// "somtoo"; // eg here somtoo is a value and for us to ses this value we can log it into the console
//

//DATA TYPESS
/*in javascript every value is either an object or or primitive value 
object
let me ={
    name='somtoo'
};

primitive
are in built 
 let firstName = "jonas";   
there are 7 primitive data types which are 
a) Numbers
b)String
c) Boolean
d) Undefined
e) null
f) Symbol
g) Big int


NUMBERS
1. Number(value) : are always so-called floating point numbers eg 23, 40 which means that they always have decimals even if we dont see them or dont define them eg 23 is the same as 23.0  
2. strings: which are just sequence of characters used for text eg 'Pascal'. they can either be in single or double quotes
3. Boolean: Are logical data type that can only be true or false and are used for taking decisions eg let money =true

4. Undefined: is the value taken by a variable that is empty or hasnt been assigned a value eg let children
5. Null: pretty similar to undefined as it also means an empty value but its used in different circumstances but for now dont worry about the details

6. Symbol: introduced in ES2015 and this data type is not useful for us for now but it simply defines a value that is unique and cannot be changed

7. BigInt: introduced in ES2020 which are for intergers or numbers that are to large to be represented by the number type

IT IS ASO NOTE WORTHY THAT JAVASCRIPT HAS SOMETHING CALLED DYNAMIC TYPING WHICH WHEN WE DO NOT HAVE TO MANNUALLY DEFINE THE DATATYPE OF THE VALUE STORED IN A VARIABLE, INSTEAD DATATYPES ARE AUTOMATICALLY DETERMINED 

SHOW THEM HOW TO USE THE TYPE OF OPERATOR

*/
//
//
// Variables are used to store values which we want to reuse  eg

// we can declare variables in three 3ways let, const and var

// Let and const were introduced in es6 so they are modern javascript variables while var is the old way of declaring variable. so lets learn how they are different and which one to use in which situations

// LET Keyword is used to declare valuses that we need to change later
let firstName = "jonas";
console.log(firstName);
firstName = "somtoo";
console.log(firstName);
let age;
console.log(age);
age = 2024;
console.log(age);

// CONST Keyword is used to dclare variables that are not supposed to change at any point so we can say they are immuatable eg

const birthyear = 2000;
//if we try reasigning this we will get an error

// VAR ===> should be completely avoided , however its important we know how it works cos we could still see this in older code bases . on the surface it pretty much works as let but their ar differences eg

var job = "programmer";
console.log(job);
job = "teacher";
console.log(job);

// Let and const is block scoped{} and var is function scoped
/* 
Rules for Naming variables
a) camelCase == means when you have multiple words i write the firstword in lowercase and the rest of the word will start with upper case eg lastName, getElementById
b.) We cannot start variables starting with numbers , but can only contain numbers,letters, underscrore or dollar sign  
c) We cannot name variables using javascript reserved keywords eg new, function
d) we Should not start a variable name with an uppercase letter (Not illegal but its a convection)
e) Make sure your variabl names are descriptive
*/

const _james = "person";
console.log(_james);

// Basic Operators
/* Operatos basically helps us to transfor, values  or combine multiple values or really do all kinds of work with values 

many categories includes 
mathematical or arithmetic operations
Bitwise Operators
Comparison Operators
Logical Operators etc


*/
//Minus
const year = 2024;
const ageNigeria = year - 1960;
const amalgamation = year - 1914;
console.log(ageNigeria, amalgamation);

console.log(amalgamation / 10, ageNigeria * 2, 2 ** 3);

//
let num = 23 + 40;

// Plus operator to concantenate strings
const myFirstName = "amarachi";
const myLastName = "okeke";
const fullName = firstName + myLastName;
console.log(fullName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; //x= x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x= x + 1 = 101
x--; // x= x -1
console.log(x);

// Comparison operators   and logical ==== are used to produce boolean values

console.log(ageNigeria > amalgamation); // <,>, <=, >=

//now try this
console.log(2024 - 1960 > 2024 - 1914); // here how do we know how javascript is going to compute this, like is it going to do something like 2024-1960 then compare the result and then substract 1914 and this is where operator precedence comes in

// OPerator precedence is the order in which operators are executed

console.log(23 - 50 * 3 ** 3); //-1327
// 23-50*27
//  23-1350

console.log((23 - 50) * 3 ** 3); //-729
// -27 *27
console.log(23 - 50 + 3 ** 3 / 40);

console.log(23 - (50 * 3 ** 3) / 40 > 30); //

//Average of 3 numbers
console.log((3 + 3 + 8) / 3);

let j = 10;
console.log(20 - 10 + j++); // 20 reason j was incremented but not used in this case

console.log(j); //11

console.log(20 - 10 + ++j); // 22

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
// SOLUTION
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

// SRINGS AND TEMPLATE LITERALS
const myName = "jayjay";
const myjob = "footballer";
const yearOfBirth = 1987;
// No we can use this variables to build a string
const okocha =
  "I'm " + myName + " a " + (year - yearOfBirth) + "year old" + " " + myjob;
console.log(okocha);
//Now you would be wondering how we were able to add both numbers and strings and that is as a result of type coercion in javascript , which essentially means forcefully converting a value with a known data type to another data type eg converting a number to a string
