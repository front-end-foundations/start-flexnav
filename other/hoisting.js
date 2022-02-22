// https://gomakethings.com/what-is-hoisting-in-vanilla-javascript/

// This function declarations was hoisted, so it works
var added = add(3, 3)

function add(num1, num2) {
  return num1 + num2
}

console.log(added) // returns 6

// This function expression was not hoisted, so it doesn't
// returns Uncaught TypeError: subtract is not a function

var subtracted = subtract(7, 4)

console.log(subtracted)

var subtract = function (num1, num2) {
  return num1 - num2
}
