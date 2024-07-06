// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
  let i = 1;    
  while (i <= 5) {
    // console.log(i);
    i++;
    }

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
    let j = 0;
    do {
      j++; 
      // console.log(j);
    } while (j < 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
    for (let i = 1; i <= 5; i++) {
    // console.log(i);
    }

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
  // WHILE LOOP
      let k = 10;
      while (k > 0) {
        // console.log(k);
        k--;
      }

  // DO WHILE LOOP
      let l = 11;
      do {
        l--;
        // console.log(l);
      } while (l > 1);

  // FOR LOOP
      for (let i = 10; i >= 1; i--) {
        // console.log(i);
      }

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
  // WHILE LOOP
      let m = 7;
      while (m <= 27) {
        // console.log(m);
        m++;
      }

  // DO WHILE LOOP
      let n = 6;
      do {
        n++;
          // console.log(n);
      } while (n < 27);

    // FOR LOOP
      for (let i = 7; i <= 27; i++) {
        // console.log(i);
      }

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc. 
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
  // Note: directions says to print 0-100, while i.e. says to print 10-100
  // WHILE LOOP
      let o = 10;
      while (o <= 100) {
        // console.log(o); 
        o += 10;
      }

  // DO WHILE LOOP
      let p = 0;
      do {
        p += 10;
        // console.log(p);
      } while (p < 100);

// // FOR LOOP
      for (let i = 10; i <= 100; i += 10) {
        // console.log(i);
      }

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// The following loop is an infinite loop because the range is not clearly defined,
// while (counterFour < 2) would continue to count forever into negative infinity
// By adding while (counterFound >= -100), the count will continue until it reaches -100

let counterFour = 1;
while (counterFour >= -100) {
  // console.log(counterFour);
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

// My favorite integer is 9
  for (let i = 0; i <= 9; i++) {
    // console.log(i);
  }

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

  let answer9 = 9 
  let str1 = " my favorite number!"
  let str2 = " not my favorite number"
  for (let i = 0; i <= 100; i++) {
    if (i === answer9) {
      // console.log(answer9 + str1);
    } else {
      // console.log(i + str2);
    }
  }

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// While Loops - I would use this loop if I wanted to check if the condition is true before executing 
  // a code block, and continuing to run that code block until it is false. 
// Do While Loops - I would use this loop if I wanted my code block to run regardless if the condition
  // is true or false 
// For Loops - I would use this loop if I wanted the loop to evaluate the condition statement before 
  // each iteration of the loop. This loop continues until the condition is false, and will not execute
  // the code block if it is initially false. 

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  // console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter <= outsideCounter && insideCounter >= 1; insideCounter--) {
    // console.log("inside", insideCounter);
  }
  // console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// I found these exercies to be more challenging than the first set of exercises, but not difficult
  // to solve. References I used to refresh my knowledge on syntax and loops were W3Schools and Stack Overflow.

// Email your file to us or commit your file to GitHub and email us a link.
