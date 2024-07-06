// In these exercises, you will be working on conditional statements,
// namely the if / else if / else and switch/case conditionals.

// For these exercises, you will place your code in a function block.
// If you don't know what a function is yet, that's ok, your code will be the
// same. The variables will be defined for you, you just have to plug in the
// logic.

// For example, if asked for exercise 0 to assign the value of myAnswer to the sum
// of num1 and num2, and were given this construct:

// function exercise0(num1, num2) {
//   let myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 0 below here:
//   // ------------------------------------------
//
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// You would put your code between the "below here"
// and "above here" blocks as shown:

// function exercise0(num1, num2) {
//   let myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 0 below here:
//   // ------------------------------------------
//   myAnswer = num1 + num2;
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// EXERCISE 1.
// First reassign the value of `answer1` so that it has the value of:
// "num1 is small"
// Write an if statement that checks if a variable `num1` is greater than 10.
// If it is, then within your if statement code change the value of answer1 so
// that its new value would be a string that says:
// "The value of num1 is <num1 value> and is greater than 10".

function exercise1(num1) {
  let answer1 = "";
  // ------------------------------------------
  // Write your code for exercise 1 below here:
  // ------------------------------------------
    answer1 = "num1 is small"
    if (num1 > 10)
      return "The value of num1 is " + num1 + " and is greater than 10";
  // ------------------------------------------
  // And above here
  // ------------------------------------------
  return answer1;
}
// console.log(exercise1(1)); // num1 is small
// console.log(exercise1(10)); // num1 is small
// console.log(exercise1(15)); // The value of num1 is 15 and is greater than 10
// console.log(exercise1(30)); // The value of num1 is 30 and is greater than 10
// console.log(exercise1(-1)); // num1 is small
// console.log(exercise1(-5)); // num1 is small

// EXERCISE 2.
// Write an if/else conditional statement that if given a number will assign
// a string value of:
// "<num2 value> is even" to `answer2`,
// if `num2` is even
// and a value of "<num2 value> is odd" to `answer2`,
// if `num2` is odd.
// ie. if num2 has a value of 4 then the message should read:
// "4 is even"

function exercise2(num2) {
  let answer2;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (num2 % 2 == 0) {
    return num2 + " is even";
  } else {
    return num2 + " is odd";
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer2;
}
// console.log(exercise2(0)); // 0 is even
// console.log(exercise2(1)); // 1 is odd
// console.log(exercise2(3)); // 3 is odd
// console.log(exercise2(10)); // 10 is even
// console.log(exercise2(-1)); // -1 is odd
// console.log(exercise2(-6)); // -6 is even

// EXERCISE 3.
// Write an if/else if/else block such that if `num3` is positive, then
// answer3 is assigned the string value of:
// "<num3 value> is positive"
// if `num3` is negative, then the value should be:
// "<num3 value> is negative"
// otherwise if the value is zero it should return
// "<num3 value> is zero"

function exercise3(num3) {
  let answer3;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (num3 > 0) {
    return num3 + " is positive";
  } else if (num3 < 0) {
    return num3 + " is negative";
  } else if (num3 == 0) {
    return num3 + " is zero"
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer3;
}
// console.log(exercise3(1)); // 1 is positive
// console.log(exercise3(6)); // 6 is positive
// console.log(exercise3(10)); // 10 is positive
// console.log(exercise3(0)); // 0 is zero
// console.log(exercise3(-1)); // -1 is negative
// console.log(exercise3(-7)); // -7 is negative

// EXERCISE 4.
// Write an if/else statement such that if `varA` and `varB` are strings or
// numbers and they have equal values, then change the value of answer4 to
// "varA and varB are equal"
// otherwise assign a value of "varA and varB differ"

// notes:
// if varA and varB can either be strings or numbers but have equal values, == is used
// if both must be strings, or both must be numbers, and have equal values, === should be used

function exercise4(varA, varB) {
  let answer4;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (varA == varB) {
    return "varA and varB are equal";
  } else {
    return "varA and varB differ";
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer4;
}
// console.log(exercise4(1,1)) // varA and varB are equal
// console.log(exercise4("4",4)) // varA and varB are equal
// console.log(exercise4(null,undefined)) // varA and varB are equal
// console.log(exercise4(2,3)) // varA and varB differ
// console.log(exercise4("7",9)) // varA and varB differ
// console.log(exercise4("true",true)) // varA and varB differ
// console.log(exercise4("ten",10)) // varA and varB differ

// EXERCISE 5.
// In exercise 4, what are some of the unexpected cases where `varA` and `varB`
// seemed like they are equal, but would not pass the tests? In your analysis
// consider other data types beside strings and variables.

// An unexpected case where varA and varB would seem like they are equal, 
// but would not pass the test is if one was a number and the other was a written number.
// For example (1,"1") would pass, but (1,"one") and ("1","one") would not pass
// Another unexpected case would be (true,"true") or (false, "false")
// Although we would expect this case to result to be equal, they result to be differ.

// EXERCISE 6.
// Here, assign the value of true to answer6 if:
// `varA` and `varB` are equal, but `varA` or `varB` does not equal `varC`
// in the event this is not the case, change the value of answer6 to false
function exercise6(varA, varB, varC) {
  let answer6 = "unassigned";
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
if (varA === varB && (varA != varC || varB != varC)) {
  return true;
} else {
  return false;
}
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer6;
}
// console.log(exercise6(3,2,3)) // false
// console.log(exercise6(1,1,3)) // true
// console.log(exercise6(1,2,1)) // false
// console.log(exercise6(5,5,5)) // false

// EXERCISE 7.
// Use a switch conditional statement with case clauses such that if `num7` is
// a number and it has a value of 1 that `answer7` is assigned the string:
// "You won!"
// if num7 is 7, then answer7 should be:
// "You are lucky!"
// if num7 is 101, then answer7 should be:
// "Welcome to coding 101!"
// if num7 is 1000000, then answer7 should be:
// "You are one in a million!"
// Othewise, assign answer7 a value of:
// "Thanks for that!"

function exercise7(num7) {
  let answer7;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  answer7 = "";
  switch(num7) {
    case 1:
      return "You won!";
    case 7:
      return "You are lucky!";
    case 101:
      return "Welcome to coding 101!";
    case 1000000:
      return "You are one in a million!";
    default:
      return "Thanks for that!";

  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer7;
}
// console.log(exercise7(1)); // You Won!
// console.log(exercise7(7)); // You are lucky!
// console.log(exercise7(101)); // Welcome to coding 101!
// console.log(exercise7(1000000)); // You are one in a million!
// console.log(exercise7(0)); // Thanks for that!
// console.log(exercise7(10)); // Thanks for that!
// console.log(exercise7(100)); // Thanks for that!
// console.log(exercise7("1")); // Thanks for that! (must be a number)

// EXERCISE 8.
// Using any conditional assign the value of true to answer8 if:
// the values of amount1 and amount2 are between the values of
// minimum and maximum
// if not, assign a value of false to answer8
function exercise8(amount1, amount2, minimum, maximum) {
  let answer8;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
    return (amount1 > minimum && amount1 < maximum) && (amount2 > minimum && amount2 < maximum);
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer8;
}
// console.log(exercise8(2,3,1,4)); // true
// console.log(exercise8(-1,10,-2,12)); // true
// console.log(exercise8(0,10,-1,12)); // true
// console.log(exercise8(0,10,0,12)); // false
// console.log(exercise8(1,10,2,15)); // false
// console.log(exercise8(-7,10,-1,20)); // false
// console.log(exercise8(5,125,-1,20)); // false

// EXERCISE 9.
// In this exercise, if `item` is a number, follow the rules given in Exercise 7
// except that `answer7` is replaced by `answer9`
// If `item` is not a number, then assign a value to answer9 of:
// "Please send a number, that was a <data type>."
// for example, if item===true, the value should be:
// "Please send a number, that was a boolean."
function exercise9(item) {
  let answer9;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  answer9 = "";
  switch (typeof item) {
    case "string":
      return "Please send a number, that was a string."
    case "object":
      return "Please send a number, that was an object."
    case "boolean":
      return "Please send a number, that was a boolean."
    case "undefined":
      return "Please send a number, that was an undefined."
  }
  
  switch(item) {
    case 1:
      return "You won!";
    case 7:
      return "You are lucky!";
    case 101:
      return "Welcome to coding 101!";
    case 1000000:
      return "You are one in a million!";
    default:
      return "Thanks for that!";
  }    

  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer9;
}
// console.log(exercise9("hello")); // string
// console.log(exercise9(["hello"])); // object
// console.log(exercise9(true)); // boolean
// console.log(exercise9(false)); // boolean
// console.log(exercise9(undefined)); // undefined
// console.log(exercise7(1)); // You Won!
// console.log(exercise7(7)); // You are lucky!
// console.log(exercise7(101)); // Welcome to coding 101!
// console.log(exercise7(1000000)); // You are one in a million!
// console.log(exercise7(0)); // Thanks for that!
// console.log(exercise7(10)); // Thanks for that!
// console.log(exercise7(100)); // Thanks for that!
// console.log(exercise7("1")); // Thanks for that! (must be a number)

// EXERCISE 10.
// This question is a modified version of a classic programming question
// called "Fizz Buzz"
// Using a conditional, assign a value of:
// "Fizz" to `answer10` if the value of `num10` is divisible by 3
// "Buzz" to `answer10` if the value of `num10` is divisible by 5
// "Fizz Buzz" to `answer10` if the value of `num10` is divisible by 15
// and if none of these conditions are satisfied, then assign the value of
// `num10` to `answer10`

function exercise10(num10) {
  let answer10;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  answer10 = "";
  if (num10 % 15 === 0) {
      return "Fizz Buzz";
  } else if (num10 % 5 === 0) {
      return "Buzz";
  } else if (num10 % 3 === 0) {
      return "Fizz";
  } else {
      return num10;
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer10;
}
// console.log(exercise10(3)); // Fizz
// console.log(exercise10(18)); // Fizz
// console.log(exercise10(5)); // Buzz
// console.log(exercise10(25)); // Buzz
// console.log(exercise10(15)); // Fizz Buzz
// console.log(exercise10(30)); // Fizz Buzz
// console.log(exercise10(0)); // Fizz Buzz
// console.log(exercise10(1)); // 1

// Congrats, you made it to the end! You rock!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// I found these exercises more challenging than the 1_VariablesExercises, but not too difficult to solve.
// I used references such as Stack Overflow, W3Schools, and WDN Web Docs to refresh my knowledge on syntax and conditional statements.

// Email your file to us or commit your file to GitHub and email us a link.
