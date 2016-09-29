/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

// Your code here
console.log("Question 1");
imageFiles = ["image1.png", "image2.png", "image3.png"];
console.log(imageFiles);

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

// Your code here
console.log("Question 2");
q2 = imageFiles[0];
console.log(q2);
/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

// Your code here
console.log("Question 3");
var q3 = imageFiles.length;
console.log(q3);
/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */

// Your code here
console.log("Question 4");
q4 = imageFiles[imageFiles.length - 1];
console.log(q4);

// Bonus 1
// Using the array from Question 1, capitalize the first letter of each 
// element in the array and store the elments in a new variable bonus1.
// The a final array should look like:  ["Image1.png", "Image2.png", and "Image3.png]
// HINTS:
// -using the .split("") method will covert a string of text into an array
// -using the .join("") method wil join the elements back into a string
// -using .toUpperCase() will covert a letter from lower to upper case

// Your code here
//Perform the same action for each item in the array


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, .forEach() or .map() method to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

// Your code here

console.log("Question 5");
var numbers = [1, 2, 3, 4];
var newNumbers = [];
for(i = 0; i < numbers.length; i++) {

  newNumbers.push(numbers[i] + 1);

}
console.log(newNumbers);
/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */

// Your code here
console.log("Question 6");
var q6 = 0;
var newNumbersSum = 0;
for(i = 0; i < newNumbers.length; i++) {
    newNumbersSum += newNumbers[i];
}
q6 = newNumbersSum/newNumbers.length;
console.log("The average is " + q6);
/** 
 * Question 7
 * Loop through the array of ["green","blue","yellow"], and return only the 
 * color "blue". Store the new array in q7.
 */

 // Your code here
console.log("Question 7");
q7 = [];
colors = ["green","blue","yellow"];
colors.forEach(
    function(color){
        if(color == "blue") {
            q7.push(color);
        }
    }
)
console.log(q7);


 /** - BONUS 2
  * Using the array of ["a","b","c","a","b"], create a new array which contains 
 * only unique values from the array provided. Store the new array in bonus2.
 * HINTS: 
 * - the .filter() method can be used to return comparisons that evaluate to true
 * - the .reduce() method can also be used to return true evaluations and also create a new array
 * - the .indexOf() method can be used to find the first matching value of an element in an array
 */

 // Your code here


 /** - BONUS 3
  * Using the array of [1,2,3,1,2], determine if any one value is the sum of the values
  * before and after it's index position. Store the index & index value in bonus3.   
  * HINTS: 
  * - a for() loop can be used to iterate through each element in array
  * - the .slice() method can be used to disect an array
  * - the .reduce() method can be used to sum all the values in an array
 */


