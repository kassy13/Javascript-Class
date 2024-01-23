//in the last lecture we talked aboutoperators and then we also talked about  concatenation which is basically adding strings together

// Template literals
const firstName = "jay";
const job = "teacher";
const birthyear = 1991;
const currentYear = 2024;

// lets try building a string i'm jay a 40 year old teacher
const jayjay =
  "I'm " + firstName + ", a" + (currentYear - birthyear) + "years old" + job;
console.log(jayjay);
//so we put the calculation in a bracket so it can be calculated first
// well you might be wondering that the result of year- birthyear should be a number so therfore we are adding number to a string so how is it going to work?
//well, this has to do with something called type coercion. so basically javascript will simply convert this number to a string so that it can concatenate them

// so looking at this its quiet a pain to add all these empty strings and thats where template literals was adopted

// so with invention of  template literals we can write strings in a more normal way and then basically insert  the variables directly into the string (I'm jay, a 40 year old teacher)
const jayjayaNew = `I am ${firstName}, a ${
  currentYear - birthyear
} years old ${job}`;
console.log(jayjayaNew);
// so we can also use template literals for all string
//another use for template literals to for creating multi line strings , before template literals it was cumbersome to write strings in a new lines.
console.log(
  "string with \n\
multiple \n\
lines"
);
console.log(`Template String 
with 
multiple
lines`);

//Type conversion and coercion
//Type conversion is when we manually convert from one type to another while type coercion automatically converts types behind the scenes for us so lets start with type conversion

//so lets say that we have an input field on a web page for the user to input their birth year and this inputs from input fields ususally come as  strings so lets say the input value we got from the input is a strin '1991' and we cannot run calculations with this
// console.log(typeof prompt("what number are you thinking"));

const inputYear = "1991";
console.log(inputYear + 18);
// to convert the string to a number we use the in built number finction provideed by javascript which goes like this
console.log(Number(inputYear));

//but what happens when we try to convert a string which cant be converted into a number
console.log(Number("jonas"));
//so we get NaN which is a not a number which means its an invalid number.its not really Not a number reason being that when you check the typeof NaN it shows that its a type of number so therfore Nan is just an invalid number

// we can also convert numbers to string
console.log(String(90));
//javascript can only convert to three types, so we can convert to a number, to a string and to a booleans but we cannot convert something to undefined or to null

// so far we have just converted to numbers and to strings but not booleans and thats because booleans behave in a special way and we will see that soon enough on the so called truthy and falsey values

// type coercion
// so type coercion happens when an operator is dealing with two values that have different types so in that case javascript will then , behind the scenes convert one of the values to match the other value so in the end the operation can be executed.

// so we have actually kind of seen this already  when we do
console.log("I am" + " " + 23 + " " + "years old"); //we know its going to produce the string i am 23 years old but how does that actually work because 23 is a number so we have different types here, string, number and another string
// so in javascript the plus opertion we used here triggers a coercion to strings and so whenever theres an operation between a string and a number, the number will be converted to a string

// thanks to type cooercion writing this
console.log("I am" + " " + 23 + " " + "years old"); // is the same thing as writing
console.log("I am" + " " + "23" + " " + "years old");
// and the same thing happens in template literals where it takes in all the numbers and convert them to string

//actually not all operators do type coercion to strings let me show you something
console.log("23" - "10" - 3); //10
//it looks like this time javascript converted the strings to number and thats why we got ten
//so what that means is that the minus operator triggers the opposite conversion . so in this case strings are converted to numbers nd not the other way round
console.log("23" + "10" - 3);
console.log("23" * 2); // number becases thats the only way the multiplier can work and the same of course is true for dividing
console.log("23" > "18"); // true

// so in a nutshell javascript will convert strings to numbers automatically. the only way in which it doesnt do that is with the plus operator .which happens the other way round all the numbers are converted to strings

//GUESS THE OUTPUT
let n = "1" + 1; //11 string
n = n - 1;
console.log(n); // 10 number
console.log(2 + 3 + 4 + "5"); //95 string
console.log("10" - "4" - "3" - 2 + "5"); //15 string

//Boolean logic
//boolean logic is a branch of computer science which uses true and false values to solve complex logical problems. and to do that it uses several logical operators to combine true and false values. like how we use arithmetic operators to combine numerical values. so i will be just scratching the surface on the most basic logical operators which are the AND, OR and NOT opearators and Note boolean logic is not just specific to javascript other languages also use boolean logic

/* Now lets look at these two boolean variables that can either be true or false so
a. she has a driver's license 
b. she has good vision. 
so both of these are of course coniditions, that can be true or false because she could have no drivers license and she could have no good vision right? and of course on the other hand she could have a drivers lisense and could have a good vision as well .
now using the AND operator like A AND B we can combine these two boolean variables which are she has a driver's lisence and she has good vision but now what will be the result of this operation? for that we use something called the TRUTH TABLE
*/

/* 
So here we have to possible values for each of the variables , A AND B which gives us four possible combinations of results 
so from what we can see from the table its only when A and B are true will the final result be true  so again what the AND operator does is to return TRUE only if both A and B are true in all other situations, if either A or B are false then A AND B will be false and we can also generalize this to more than just two values , we could do A AND B AND C and the result will be true only if all of them are true but if one of them is false then the result is immediately false 
*/

/*
OR OPERATOR 
this kind of works the opposite way as the AND OPERATOR so with our current example we could use the OR operator to determine wheter she has a drivers lisence OR good vision  so by looking at the OR truth table it confirms that once one of the variable is true , the result will be true  and once more if we hav multiple values its enough for one of the variables to be true and the result will be true as well
*/
/* NOT OPERATOR
a lot more simpler because it does not combine multiple values instead it acts on only one boolean value and it basically inverts it so if A is true then NOT A will become false
*/
/*
so going back to using using our age for example and we have these two variables
a. Age is greater or equal to 20 
b. Age is less than 30
*/
let age = 16;
console.log(age >= 30);
console.log(age < 30);

//LOGICAL OPERATORS

const hasDriversLisence = true;
const hasGoodVision = true;
//so lets now start by using the AND and OR operators
console.log(hasDriversLisence && hasGoodVision);

//TRUTHY AND FALSEY VALUES
// falsey values are values that are not exactly false but will return false when we try to convert them to a boolean. in javascript we have only 5 Falsey values which are 0, '' , undefine, null and NaN. so what that means is that all these five valuse we become false when we try to convert them to boolean
// truthy values are anything else apart from the these falsey values which are values which will be converted to true

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("")); //false
console.log(Boolean("jay")); //true
console.log(Boolean({})); //true

// in practice the conversion to boolean is always taken care by javascript behind the scenes which is the so called type coercion to boolean  but i just wanted to show you guys the concept of truthy values. but when do javascript do this type coercion to booleans, well it happens in two scenarios. First when using logical operators like AND, OR, NOT and second in a logical context like for example an if else statement so lets start by consolidating what we have learnt so far we have two variables on
const sheHasGoodVision = true;
const sheHasADriversLisense = false;
console.log(sheHasADriversLisense && sheHasGoodVision);
console.log(!sheHasADriversLisense || sheHasGoodVision);

//CONTROL STRUCTURES
// go to the functions script
const money = 0;
if (money) console.log("Agba baller");
else if (money !== null) console.log("At least we are not owing");
else console.log("Go make some papers");

let height;
if (height) {
  console.log("OSHEY!! Giant");
} else {
  console.log("Oga small");
}
