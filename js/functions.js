// FUnctions are simply a piece of reusable codes , they are like variables but for storing chunks of codes its used to write DRY codes (DO Not repeat yourself)

// Function Declaration
// Syntax =  function NameOfFunction(parameter) {}

//  parameters are dummy values that are passed into a function when it is called and are specific to a function.
//lets say for example you want to write a function for calculating the average of two numbers we can specify the parameters as a, b which are dummy values because right now you dont know the numbers yet . so finally when you call, invoke or execute the function we should be able to provide the values or numbers then

function logger() {
  console.log("hello world");
  console.log("hello world its a beautiful day");
}
logger();

// NOTE Not all functions need to return something and not all functions need to have parameters

greet("Adaobi");
function greet(name) {
  const greeting = "Hello, " + name + "Good Morning" + "!";
  console.log(greeting);
  return greeting;

  console.log("Never will run ");
}
greet("obinna");
greet("Amaka");

// Default parameters
function greet2(name = "dear") {
  const greeting = "Hello, " + name + "Good Morning" + "!";
  console.log(greeting);
  console.log("declar", this);
  return greeting;

  console.log("Never will run ");
}
greet2();

function Calcage(birthyear) {
  // we can simply return the value of this function without storing in in a variable first like we did earlier
  //   secondly the this keyword

  return 2037 - birthyear;
}
const age1 = Calcage(1990);
console.log(age1);

const greetName = (name) => {
  const year = 2024;

  return `James graduated in  ${year}`;
};
console.log(greetName("James"));

// Function expressions
const Calcage2 = function (birthyear) {
  console.log("express", this);
  return 2037 - birthyear;
};
const age2 = Calcage2(1990);
console.log(age2);

// Diifference between function Expressions and function declarataion is that function declarations can be hoisted ie they can be called before they are declared

// Arrow function
const arrow = (birthyear) => {
  console.log("arrow", this); //in this case its pointing to the nearest object in our case the global object
  2037 - birthyear;
};

console.log(arrow(1990));

const arrow2 = (birthyear) => {
  let arrowage2 = 2037 - birthyear;
  return arrowage2;
};
console.log("arrowage2", arrow2(1990));

// METHOD
// A method is a function that is a property of an object.
// Invoked using the dot notation on an object.
// this inside a method refers to the object the method is called on.
// EXAMPLE;
const person = {
  name: "John",
  hobbies: ["programming", "lecturing"],

  greeter: () => {
    console.log(this.name); // 'this' refers to the global object, not 'person'
  },
  listHobbies: function () {
    this.hobbies.forEach(() => {
      console.log(this);
    });
  },
  hear: () => {
    console.log("arrow", this);
  },
};
person.hear();
// THIS KEYWORD DOESNT WORK LIKE REGULAR FUNCTIONS SO THEY DONT HAVE THEIR OWN THIS KEYWORD BUT RATHER THEY INHERIET THE THIS SCOPE OF THE NEAREST SURROUNDING REGULAR FUNCTION IN OUR CASE IT CHECKs AND THERE IS NO REGULAR FUNCTION SURROUNDING IT SO IT MOVES UP AND THEN USE THE GLOBAL OBJECT AS ITS THIS REFERENCE WHICH IS NOW THE WINDOW OBJECT , IT CHECKES FOR THE NAME THERE AND WHEN IT DOESNT SEE IT , IT RETURNS UNDEFINED
person.greeter(); // Outputs 'undefined' or an error, not 'John'
// Output: Hello, my name is John
// person.listHobbies()()("Alice");
//   // IIFE === immediately invoked function expressions
// sometimes we need a function that is only executed once and then never again so basically a function that disppears once right after its called once, this might not make much sense right now but we actually need this technique later in something called asyn await. so how could we do that?

// function () {
//   console.log("This will never run again");
// }

(function (name) {
  console.log(`Hello, ${name}!`);
})("oooobi");
() => console.log("This wil also never run again")();

//This is a keyword which is used to refer to the object that is executing the current function
// global scope is the window object

// CODING CHALLENGE
// create an arrow function to calculate the average of 3 scores , log your result to the console
const checkAvg = (a, b, c) => (a + b + c) / 3;
console.log(checkAvg(2, 3, 4));

//TRUTHY AND FALSEY VALUES

//CONTROL STRUCTURES IN JAVASCRIPT
// Are used for taking decisions in our code , so it kind of helps us decide the flow pattern and that is what and what code will be executed based on our conditions

// so lets say that we want to write a program that checks weather a person is allowed to have a drivers license or not and if he is it will print that to the console and if he is not , its going to calculate how long until the person can stay before geeting their linsense

/*syntax is
if(condition that returns a boolean) {
  code  for if the condition is true
}else{
  code for if the condition is false
}
*/
const age = 19;
// const isOldEnough = age >= 18; //result will be true

if (age >= 18) {
  console.log("Obi can start driving ");
} else {
  const yearsLeft = 18 - age;
  console.log(`Obi is too young. wait another ${yearsLeft} years`);
}
// the else block is actually not a must

// so this time around lets create a variable conditionally
// Condition
const isSunny = true;

// Variable assigned conditionally
let weatherMessage;

if (isSunny) {
  weatherMessage = "It's a sunny day!";
} else {
  weatherMessage = "It's not sunny today.";
}

console.log(weatherMessage);

// if elseif else statements
//so i want to take my favorite animal and printing out a different string depending on what animal is my favourite
const myFavouriteAnimal = "cat";

if (myFavouriteAnimal === "cat") {
  console.log("cats are great");
} else if (myFavouriteAnimal === "dog") {
  console.log("dogs are also great but not my favourite");
} else if (myFavouriteAnimal === "shark") {
  console.log("well it seems i may be abnormal");
} else {
  console.log("i have never heard of that animal");
}

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀

*/

//  const scoreDolphins = (96 + 108 + 89) / 3;
//  const scoreKoalas = (88 + 91 + 110) / 3;
//  console.log(scoreDolphins, scoreKoalas);

//  if (scoreDolphins > scoreKoalas) {
//    console.log('Dolphins win the trophy 🏆');
//  } else if (scoreKoalas > scoreDolphins) {
//    console.log('Koalas win the trophy 🏆');
//  } else if (scoreDolphins === scoreKoalas) {
//    console.log('Both win the trophy!');
//  }

//  BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy 😭");
}

// so lloking at this, its already becoming hard to read and understand this code and then imagine checking for hundreds of diffrent animals ,how this code is going to be and thats where case statements comes in

/*switch syntax ====
 switch ( variable for comparison){

to now set up a staement for your switch you need to type the word case followed by the value you want to compare
case 'value  you want to compare': {
  // code to execute if value matches case
}

}
*/
switch (myFavouriteAnimal) {
  case "cat":
  case "bobcat":
    {
      console.log("cats are great");
    }
    break; // break helps to immeditely exit your switch statement once a condition is met , if we dont add the break , switch statements behaviour of running the rest of the code block once a condition is met will take place. in our case any other line of code after it sees the line of code that maches our condition

  case "dog":
    {
      console.log("dogs are also great");
    }
    break;
  case "shark": {
    console.log("oh no! sharks are dangerous!");
  }
  // now to implement the else statement in our previous code we do that using the default statement , so default is when js checks all the cases and there is no match it then executes the codes inside the default
  default: {
    console.log("I have never heard of that animal");
  }
}
//so what happens if my favourite animal is bob cat , well technically bobcat is a type of cat right so we can also check for that by grouping it with cat

const day = "tuesday";
switch (day) {
  case "monday":
    {
      console.log("bdajhda");
      console.log("SBJADKHDAB");
    }
    break;
  case "tuesday":
    {
      console.log("tuesday");
      console.log("tuesday");
    }
    break;
  case "wednesday":
  case "thursday": {
    console.log("wednesday");
    console.log("thursday");
  }
  default: {
    console.log("Not a valid day");
  }
}
//Ternary Operator
isSunny ? console.log("its a sunny day") : "its partly sunny";

//create a function for checking if a number is odd or even
const isEven = function (num) {
  if (num % 2 === 0) {
    console.log("This is an even number");
  } else {
    console.log("This is an odd number");
  }
};
isEven(5);

// LOOPS IN JAVASCRIPT
/*

Loops in JavaScript are control structures that allow you to repeat a block of code multiple times. They are used to automate repetitive tasks, iterate over data structures, and perform operations on a set of values. Loops are essential for making code more concise, efficient, and flexible.

There are several types of loops in JavaScript:

lets start with a basic example so lets say we want to console log something 5 times withouth some sort of a loop we do that by 
console.log('loop')
console.log('loop')
console.log('loop')
console.log('loop')
console.log('loop')

for Loop:

The for loop is used to iterate over a specified range or perform a specific number of iterations.
SYNTAX 
for (initialization; condition; increment/decrement) {
  // code to be executed in each iteration
}
*/
for (let i = 0; i < 5; i++) {
  console.log("loop", i);
  //i in this case is the index
}
for (let i = 6; i > 0; i--) {
  console.log("loop decrement", i);
}
// let i = 4: Initializes the loop variable i to 4.
// i >= 0: Specifies the condition for the loop to continue as long as i is greater than or equal to 0.
// i--: Decrements the value of i by 1 in each iteration.

/* 
while Loop:

The while loop repeatedly executes a block of code as long as the specified condition is true.
Syntax:

while (condition) {
  // code to be executed as long as the condition is true
}
//we specify our initialization outside the loop  then the increment inside
*/
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
  // if (j === 3) break;
}

/* 
do-while Loop:

The do-while loop is similar to the while loop, but it guarantees that the block of code is executed at least once, as the condition is checked after the first iteration.
Syntax: do {
  // code to be executed
} while (condition);

*/
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 1);

/*
 for...in Loop:

The for...in loop is used to iterate over the properties of an object.
Syntax: 

for (variable in name of object) {
  // code to be executed for each property
}

*/
const aperson = { name: "John", age: 30, job: "Developer" };
for (let key in aperson) {
  console.log(key + ": " + aperson[key]);
}

/* for...of Loop:

The for...of loop is used to iterate over the values of an iterable object (arrays, strings, etc.).
for (variable of iterable) {
  // code to be executed for each value
}
*/
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num);
}
for (let i = 0; i < numbers.length; i++) {
  console.log(`Index: ${i}, value: ${numbers[i]}`);
}
const user = { firstName: "obiAda", lastName: "okeke" };

for (key in user) {
  console.log(key, user[key]);
}
/* The forEach loop is a method available for arrays in JavaScript, providing a concise way to iterate over each element of the array and perform a specific action for each element. It is often preferred for its simplicity and readability.

Here is the basic syntax of the forEach loop:

array.forEach(function(currentValue, index, array) {
  // code to be executed for each element
});
// Example usage:
currentValue: The current element being processed in the array.
index: The index of the current element being processed.
array: The array on which the forEach loop was called.
The forEach loop does not create a new array; it simply iterates over the existing one.

*/

const colors = ["red", "green", "blue"];

colors.forEach(function (color, index, array) {
  console.log(`Color at index ${index}: ${color}, ${array}`);
});

const number = [1, 2, 3, 4, 5];
let sum = 0;

// number.forEach(function (number) {
//   sum += number;
// });
const adding = function (number) {
  return (sum += number);
};
number.forEach(adding);
console.log(`Sum of number: ${sum}`);

//lets use for each to loop to convert an array of temperatures from celcius to fahrenheit
const temperaturesInCelsius = [25, 30, 22, 18, 27];
const temperaturesInFahrenheit = [];

temperaturesInCelsius.forEach(function (celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  temperaturesInFahrenheit.push(fahrenheit);
});

console.log(temperaturesInFahrenheit);

//When to use loops
/* When to use loops:

Iterating Over Arrays or Collections: Use loops to iterate over the elements of an array or the values of a collection.

Processing Data: Use loops to perform operations on each item in a dataset.

Repeating Tasks: Use loops when you need to execute a block of code multiple times.

Dynamic Code Execution: Use loops when the number of iterations is not known beforehand and needs to be determined dynamically. */

// Expression is a piece of code that produces a value , values are also expressions
// statements are bigger pieces of codes and they do not return a value.
/* 
NOTE WORTHY POINTS

Scope in JavaScript functions refers to the visibility and accessibility of variables.

Functions create their own scope, and variables declared inside a function are usually not accessible outside that function.

What is a closure, and how does it relate to functions?
A closure is a combination of a function and the lexical environment within which that function was declared. It allows a function to retain access to variables from its outer (enclosing) scope even after the outer function has finished executing.

Lexical scope means that the scope of a variable is determined by its position within the source code. In JavaScript, functions are the primary scope-delimiting structures, and the scope is defined by the physical placement of the code in the source


The return statement is used to specify the value that a function should return. It allows a function to produce a result that can be used or processed by the code that called the function.


If a function doesn't have a return statement or explicitly returns a value, it implicitly returns undefined.

Parameters are placeholders in the function definition that represent the values a function should receive when it's called.

Parameters are variables in a function's declaration, while arguments are the actual values passed to the function when it is invoked.

An anonymous function is a function without a name. It is defined inline and usually used for short-term purposes.


Default parameters allow you to assign default values to parameters in case no value or undefined is passed during the function call.


How are default parameters useful?
They provide a way to make functions more flexible by allowing callers to omit certain arguments.

A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. Examples include map, filter, and reduce.

Recursion is when a function calls itself. It's a programming technique where a function solves a problem by solving smaller instances of the same problem.

The base case in a recursive function is the condition that stops the recursion. It ensures that the function doesn't call itself indefinitely.

A callback function is a function passed as an argument to another function. It is executed after the completion of a specific task or at a predetermined time.

Callback functions are commonly used in asynchronous operations, event handling, and functions like setTimeout or forEach.

*/

const avgnum = [2, 4, 6, 7];
let summa = 0;
const sumAvg = function (num) {
  for (let sum of avgnum) {
    summa += sum;
    // console.log(sum);
  }
  const summt = summa / avgnum.length;
  console.log(summt);
  return summt;
};
const theAvg = sumAvg(avgnum);
console.log(theAvg);
