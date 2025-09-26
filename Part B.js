//  6. Write a JavaScript program to swap two numbers using a temporary variable.
let a = 5;
let b = 10;
let temp;
temp = a;
a = b;
b = temp;
console.log('After swapping: a = ' + a + ', b = ' + b);

//7. Write a JavaScript program to calculate the factorial of a number using a loop?
const num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++)
{
  factorial *= i;
}
console.log('The factorial of ' + num + ' is: ' + factorial);

// 8. Write a JavaScript program to print the multiplication table of a given number.
const tableNum = 5;
for (let i = 1; i <= 10; i++)
{
  console.log(tableNum + ' x ' + i + ' = ' + (tableNum * i));
}

 //9. Write a JavaScript program to reverse a number (e.g., 123 → 321).
let originalNum = 123;
let reversedNum = 0;
while (originalNum !== 0)
{
  reversedNum = reversedNum * 10 + (originalNum % 10);
  originalNum = Math.floor(originalNum / 10);
}
console.log('Reversed Number: ' + reversedNum); 

 //10. Write a JavaScript program to check whether a year is a leap year or not
const year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
{
  console.log(year + ' is a leap year.');
} else
{
  console.log(year + ' is not a leap year.');
} 