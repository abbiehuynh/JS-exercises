// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.
// Examples:
// prependToString('awesome', 'very') // --> 'veryawesome'
// prependToString('world', 'hello ') // --> 'hello world'
// prependToString('nothing', '') // --> 'nothing'
    function prependToString (str1, str2) {
        return str2 + str1;
    }
    // console.log(prependToString('awesome', 'very'));
    // console.log(prependToString('world', 'hello '));
    // console.log(prependToString('nothing', ''));

// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
// The function should return true if the first string includes the character, otherwise it should return false.
// IMPORTANT: Do not use the built in string.includes() function!
// Examples:
// stringIncludes('awesome', 'e'); // --> true
// stringIncludes('awesome', 'z'); // --> false
    function stringIncludes (str3, str4) {
        if (str4 === '') {
            return false;
        } else if (str3.indexOf(str4) > -1) {
            return true;
        } else {
            return false;
       }
    }
    // console.log(stringIncludes('awesome', 'e')); // true
    // console.log(stringIncludes('awesome', 'z')); // false
    // console.log(stringIncludes('hello', 'o')); // true
    // console.log(stringIncludes('yes', '4')); // false
    // console.log(stringIncludes('yes', 4)); // false
    // console.log(stringIncludes('yes', '')); // false

// Exercise 3. Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
// The function should return the last index at which the character exists or -1 if the character is not found.
// IMPORTANT: Do not use the built in "string".lastIndexOf() function!
// Examples:
// stringLastIndexOf('awesome', 'e'); // --> 6
// stringLastIndexOf('awesome', 'z'); // --> -1
    function stringLastIndexOf (str5, str6) {
        for (let i = str5.length - 1; i >= 0; i--) {
            if (str5[i] == str6) {
                return i;
            }
        }
        return -1;
    }
    // console.log(stringLastIndexOf('awesome', 'e')); // 6
    // console.log(stringLastIndexOf('awesome', 'z')); // -1
    // console.log(stringLastIndexOf('awesome', 'm')); // 5
    // console.log(stringLastIndexOf('mummy', 'm')); // 3
    // console.log(stringLastIndexOf('mummy', '')); // -1
    // console.log(stringLastIndexOf('mummy', 0)); // -1

// Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
// The function should return a new string with the characters removed.
// Examples:
// removeFromString('Elie', 2, 2) // --> 'El'
// removeFromString('Elie', 0, 1) // --> 'lie'
// removeFromString('Hello School', 0, 6) // --> 'School'
// removeFromString('Hello School', 2, 4) // --> 'HeSchool'
// removeFromString('Hello School', 6, 400) // --> 'Hello '
    function removeFromString (str7, stIndex, chToRemove) {
        let newString = "";
        newString = str7.slice(0, stIndex) + str7.slice(stIndex + chToRemove);
        return newString;
    }
    // console.log(removeFromString('Elie', 2, 2)) // --> 'El'
    // console.log(removeFromString('Elie', 0, 1)) // --> 'lie'
    // console.log(removeFromString('Hello School', 0, 6)) // --> 'School'
    // console.log(removeFromString('Hello School', 2, 4)) // --> 'HeSchool'
    // console.log(removeFromString('Hello School', 6, 400)) // --> 'Hello '

// Exercise 5. Write a function called indexOf, which accepts an array and a number.
// The function should return the first index at which the value exists or -1 if the value is not found.
// IMPORTANT: Do not use the built in array.indexOf() function!
// Examples:
    let arr = [5, 10, 15, 20];
// indexOf(arr, 20); // --> 3
    let arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // --> 1
    let arr3 = [1, 2];
// indexOf(arr3, 10); // --> -1
    let arr4 = [3, 4, 3];
    function indexOf (arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                return i;
            }
        }
        return -1;
    }
    // console.log(indexOf(arr,20)); // 3
    // console.log(indexOf(arr,5)); // 0
    // console.log(indexOf(arr,18)); // -1
    // console.log(indexOf(arr2,2)); // 1
    // console.log(indexOf(arr3, 10)); // -1
    // console.log(indexOf(arr4, 3)); // 0

// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. 
// The function should return true if the value exists in the collection when we search starting from the starting index. 
// Otherwise, it should return false.
// The collection can be a string, an array, or an object. 
    // If the collection is a string or array, the third parameter is a starting index for where to search from. 
    // If the collection is an object, the function searches for the value among values in the object; 
        // since objects have no sort order, the third parameter is ignored.
// Examples:
// includes([1, 2, 3], 1) // --> true
// includes([1, 2, 3], 1, 2) // --> false
// includes([1, 2, 3], 6) // --> false
// includes({ 'a': 1, 'b': 2 }, 1) // --> true
// includes({ 'a': 1, 'b': 2 }, 'a') // --> false
// includes('abcd', 'b') // --> true
// includes('abcd', 'e') // --> false
// includes('abcd', 'a', 2) // --> false

// to find val in collection, begin search at starting index
    // if there is a val in collection, start

    function includes (collection, val, stIndex2) {
        if (collection instanceof Array) {
            if (collection.indexOf(val,stIndex2) > -1) {
                return true;
            }
        } else if (typeof collection === "string") {
            if (collection.indexOf(val,stIndex2) > -1) {
                return true;
            }
        }  else if (typeof collection === "object") {
            if (Object.values(collection).indexOf(val) > -1) {
                return true;
            }
        }
        return false;
        }
    // console.log(includes([1, 2, 3], 1)); // true 
    // console.log(includes([1, 2, 3], 1, 2)); // --> false
    // console.log(includes([1, 2, 3], 6)); // --> false
    // console.log(includes({ 'a': 1, 'b': 2 }, 1)); // --> true 
    // console.log(includes({ 'a': 1, 'b': 2 }, 'a')); // --> false 
    // console.log(includes('abcd', 'b')); // --> true
    // console.log(includes('abcd', 'e')); // --> false
    // console.log(includes('abcd', 'a', 2)); // --> false
    