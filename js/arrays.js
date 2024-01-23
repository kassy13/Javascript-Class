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
//bringing back our calcAge function , i have an array called years and i want you to calculate the
