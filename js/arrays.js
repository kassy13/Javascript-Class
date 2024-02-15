"use strict";

//Data structures are a way of organizing and storing data to perform operations efficiently. They provide a way to organize and store data in a computer's memory so that it can be used effectively.
//Now lets talk about our first data structures and thats going to be arrays so lets say i want to store my friends names in variables so that we could use them later in my code and so from the knowledge that we have so far rhis is how we would do it
const friend1 = "nkem";
const friend2 = "emmanuel";
const friend3 = "chinaza";
//looking at this, its not really fun to do and imagine if we wanted to create 10variables , it means we have to start creating each variable one by one and nobody wants to do that , so instead we can essentially bundle all of these values into  a bigger container and that is whre data structures comes in and arrays are such a data structure.so what are arrays to begin with
//ARRAYS are like big containers into which we can throw variables into and then later reference them
const friends = ["nkem", "chinaza", "emmanuel"];
console.log(friends);
// another way of writing arrays is by use the new array menthod
const years = new Array(1991, 1980, 2002);
console.log(years);
// for (let kk of friends) {
//   console.log("kk", kk);
// }
//so we have learnt the different ways of creating arrays and thats basically storing different values inside one variable right? so lets now learn how to bring out these values we have stored in our array to be able use them and fore that we use the square bracket syntax again. so for us to bring out nkem from this array we do this
console.log(friends[0]); //note that arrays are zero based which means that the first element is the element number zero and so on
console.log(friends[2]);
console.log(friends.length); //we use this to get the number of values stored inside an array,and length is not zero based.
//the lenght property is also important when we wnt to get the last value inside an array so we that by doing this
console.log(friends[friends.length - 1]);
// so we can do more stuffs with arrays and this square brackets syntax that we used here is not only for retrieving element from the array we can also use it to add elements to an array. so lets say for some reasons im no longer friends with emmanuel and i want to replace him with some other  friend i have made. AND so now we can change or mutate the array in the same way.
friends[2] = "ebube";
console.log(friends);
//but wait didnt i in our classes been saying that variables declared with const cant be changed and in fact looking closely you will notice that i used const to declare this array didnt i and doesnt i contracdict what i have been preaching all these while. well what i didnt tell you at the time is that ONLY PRIMITIVE VALUES ARE IMMUATABLE(can you all list all the primitive data types that we have in javascript) but an array is not a primitive value and so that means we can actually change or mutate arrays even when they are declared using const NOW WHAT WE CANNOT DO IS TO REPLACE THE ENTIRE ARRAY
// friends = ["bob", "alice"];
//
//
//
//
//Arrays can hold different values of all datatypes , its not just specific to any data type
const meMyselfAndI = ["somtoo", "ichoku", 2024 - 1970, "instructor", friends];
console.log(meMyselfAndI);

//EXERCISE
const calcAge = function (birthyear) {
  return 2024 - birthyear;
};
//bringing back our calcAge function , i have an array called birthYears and i want you to calculate the the ages for the first, second and the last value in the array.NOTE do not count the array but use the dynamic method of getting the last value of an array
const birthYears = [1990, 1977, 2022, 1999, 2013];
//SOLUTION
const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[birthYears.length - 1]);
console.log(age1, age2, age3);
// we can even take this further and decide to store these new ages inside an array cos usually its a good idea if you started working with an array it shold also end up with an array
//so we can do this in two ways
const agesArray1 = [age3, age2, age1];
console.log(agesArray1);
//OR
const agesArray2 = [
  calcAge(birthYears[0]),
  calcAge(birthYears[1]),
  calcAge(birthYears[birthYears.length - 1]),
];
console.log(agesArray2);

// BASIC ARRAY METHODS
//first method we are going to talk about is the PUSH method which is going to add an element or value to the end of an array
friends.push("jay");
console.log(friends);

//up next we have the UNSHIFT method adds an element right at the beginning of the array
friends.unshift("john");
console.log(friends);

//Removing values in an array
//POP which removes the last element from the array
friends.pop(); //this time we dont need to pass in an arguement or parameter as we have been doing all these while reason being that we actually dont any information to remove the last value from the array
console.log(friends);

//SHIFT is used to remove the first value from the array
friends.shift();
console.log(friends);
//
//
//ANOTHER IMPORTANT ARRAY METHOD IS THE INDEXOF which is used to get the index at which a value is located in an array
console.log(friends.indexOf("nkem")); //0
// if we try to get the index of a value that is not inside of the array you will get -1
console.log(friends.indexOf("kay"));
//similar to the index of , its an es6 method and its called INCLUDES so what includes does is that instead of returning the index of the value it returns true or false depending if the element is in the array
console.log(friends.includes("nkem"));
// so what that means is that we can use this inludes method to write conditionals

if (friends.includes("nkem")) {
  console.log("you have a friend called nkem");
}
//Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

// TEST DATA: 125, 555 and 44

// HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

/*
Steven is still building his tip calculator, using the some rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above  Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*


//OBJECTS
//so up till this point we have been using arrays as a data structure to store multiple related values. with objects we define key value pairs so what that basically means is that we give each values a name, lets look at an example

const somtooObject = {
  firstName: "somtoo",
  lastName: "okeke",
  age: 2024 - 1980,
  job: "instructor",
  friends: friends,
};
console.log(somtooObject);
//Now each of these keys is also called a property.so we can say that this object here has five properties.NOTE that objects are the most fundamental concept of javascript and there are many ways of creating objects so first one is using the curly braces and its actually called the object literal
//
//
// Just like arrays we use objects to essentially group different variables that belong together

//
//
//
//the big difference between objects and arrays is that in objects the order of these values does not matter at all when we want to retrieve them. so what that means is that we should use data for structured and ordered data and objects for unstructured data

//HOW DO WE NOW RETRIEVE DATA FROM OBJECTS
//DOT NOTATION
console.log(somtooObject.lastName);
//BRACKET NOTATION
console.log(somtooObject["lastName"]);
//big difference between the dot and bracket notation is that we can actually pur any expression that we'd like so we dont have to explicitly write the string here but instead we can conpute it from some operation.EXPRESSIONS ARE SOMETHING THAT PRODUCES A VALUE
const nameKey = "Name";
console.log(somtooObject["first" + nameKey]);
console.log(somtooObject["last" + nameKey]);
// so in dot notation we have to use the real final property name and not a computed property name.
// now to solidify what we have learnt so far about bracket and dot notation lets look at another example
// const intrestedIn = prompt(
//   "what do you want to know about somtoo? choose between firstName, lastName, age, job and friends"
// );
// console.log(somtooObject.intrestedIn); so when we use the dot notation we get undefined because like i said the dot notation is used to get the real and final property andd not a computed stuff. so what javascript does is that it goes into sometoo object and looks for intrestedIN And when it doesnt find it , it returns undefined
// console.log(somtooObject[intrestedIn]); // here javascript will first compute the value of intrestedIn and then goes to somtoo object to look for the value you inputed
//
//
//
// when we try to access a property that doesnt exist in the object we get undefined and actually lets print out a custom string when we check for a value that isnt in the object and we can use the knowledge of truthy and falsey value for that

// if (somtooObject[intrestedIn]) {
//   console.log(somtooObject[intrestedIn]);
// } else {
//   console.log(
//     "Wrong request choose between firstName, lastName, age, job and friends"
//   );
// }
//USING BOTH DOT AND BRACKET NOTATION

somtooObject.location = "Nigeria";
somtooObject["favouriteAnimal"] = "bunnies";
console.log(somtooObject);
console.log(somtooObject.friends[0]);

//CHALLENGE
//write this sentence but in a dynamic way
//'Somtoo has 3 friends and her best friend is called chinaza' , so i want you to write this sentence without hard coding any of these values (somtoo, 3,chinaza )
//SOLUTION
console.log(
  `${somtooObject.firstName} has ${somtooObject.friends.length} friends and her best friend is ${somtooObject.friends[1]}`
);
//OBJECT METHODS
const newObject = {
  firstName: "jay",
  lastName: "okoye",
  birthyear: 1990,
  job: "footballer",
  friends: friends,
  hasDriversLiscence: true,
  //   ageCalc: function (birthYeah) {

  //     return 2024 - birthYeah;
  //   },
  //   ageCalc: function () {
  //     return 2024 - this.birthyear;
  //   },
  ageCalc: function () {
    this.age = 2024 - this.birthyear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.ageCalc()} - years old ${
      this.job
    } and he has ${this.hasDriversLiscence ? "a" : "no"} drivers lisence`;
  },
  //why i called the calcAge instead directly in the return is that we shouldnt assume that the calcAge has ever been called in our project before
};
//NOTE we can only specify a function expression inside our object because expressions produce value and of we try to use a function declaration we get an error
console.log(newObject.ageCalc(1990));
console.log(newObject["ageCalc"](1990));
console.log(newObject.ageCalc(newObject.birthyear));
//THIS KEYWORD IS EQUAL TO THE OBJECT CALLING THE METHOD

//
//
//
// so lets say we want to use the value calculated in our agecal function in diferent places ie the return 2024 - this.birthyeah , in our case it doesnt matter too much but imagine having a heavier computation that could actually take some more time to compute and so it would be a bad practice to do this multiple times rather what we can do is to calculate the age once and then store it in the object and then when we need it at a later point we can just retrieve the it
console.log(newObject.age);

// CHALLENGE
//Write a method called getSummary and this method should return a string which should kind of summarize the data about the newObject object
//so write out this string inside of the method
// Jay is a 34 year old footballer and he has A or No drivers lisence
console.log(
  `${newObject.firstName} is a ${newObject.age} - years old ${
    newObject.job
  } and he has ${newObject.hasDriversLiscence ? "a" : "no"} drivers lisence`
);
console.log(newObject.getSummary());
