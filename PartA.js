// #1. Write a JavaScript program to display 'Hello, World!' on the console.
console.log('Hello, World!');

// #2. Write a JavaScript program to add two numbers and display the result.
const num1 = 5;
const num2 = 10;
const sum = num1 + num2;
console.log('The sum is: ' + sum);
// #3. Write a JavaScript program to find the largest of three numbers.
const a = 15;
const b = 25;
const c = 20;
let largest;
if (a >= b && a >= c)
{
  largest = a;
} else if (b >= a && b >= c)
{
  largest = b;
} else
{
  largest = c;
}
console.log('The largest number is: ' + largest);

// #4. Write a JavaScript program to check whether a number is even or odd.
const number = 10;
if (number % 2 === 0)
{
  console.log(number + ' is even.');
} else
{
  console.log(number + ' is odd.');
}


//  4. Write a JavaScript program to find the largest of two numbers.
// const num1 = 10;
// const num2 = 20;
// let largest;
// if (num1 > num2)
// {
//   largest = num1;
// } else
// {
//   largest = num2;
// }
// console.log('The largest number is: ' + largest); 

// 5. Write a JavaScript program to calculate the square of a number.
const number1 = 5;
const square = number1 * number1;
console.log('The square of ' + number1 + ' is: ' + square);

