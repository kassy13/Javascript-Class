// Minus Operators to calculate a persons age based on the current year
const ageJonas = 2024 - 1999;
console.log(ageJonas);
const modulus = 4 !== 4;

console.log(modulus);

let x = 5,
  y = 10,
  z = 15;

x = y;
console.log(x);

x += 1;
console.log(x);

const johnBMI = 92 / 1.95 ** 2;
console.log(johnBMI);
const markBMI = 78 / (1.69 * 1.69);
console.log(markBMI);

const markHigherBMi = johnBMI > johnBMI;
console.log(markHigherBMi);

const inputYear = +"1991";
console.log(inputYear);

// if (inputYear < 2024) {
//   greet("james is eligible to vote");
// } else {
//   console.log("You are not eligible to vote.");
// }

// const emailInput = document.getElementById("textEmail");

// emailInput.onfocus = function () {
//   (emailInput.style.backgroundColor = "green"),
//     (emailInput.style.color = "white");
// };

// emailInput.onblur = function () {
//   (emailInput.style.backgroundColor = "white"),
//     (emailInput.style.color = "white");
// };

document.getElementById("textEmail").onfocus = function () {
  this.style.backgroundColor = "lightblue";
};

const phoneNumber = document.getElementById("textNumber");
phoneNumber.addEventListener("focus", function () {
  this.style.backgroundColor = "lightblue";
});

//OR

const submitbtn = document.querySelector(".btn");

const handleOnclick = function (e) {
  e.preventDefault();
  alert(`you clicked on ${this}`);
  console.log(this);
};

submitbtn.addEventListener("click", handleOnclick);
