//* Question 1
// Age Category Message — Ask the user for their age. If they are
// under 18, print "You are a minor." If they are between 18 and 60,
// print "You are an adult." If they are above 60, print "You are a
// senior citizen."

//? let justAge= Number(prompt("Enter your age ?"));
//? if(justAge < 18){
//?     console.log("You are a minor");
//? }else if(justAge > 18 && justAge < 60){
//?     console.log("You are an adult")
//? }else{
//?     console.log("You are a senior citizen");
//? }

//* Question 2
// Even or Odd Sum - Take two numbers from the user using
// prompt(). If the sum of both numbers is even, print "Even Sum";
// otherwise, print "Odd Sum."

//? let number1= Number(prompt("Enter first number: "));
//? let number2= Number(prompt("Enter Second number: "));
//? if((number1+number2)%2==0){
//?     console.log("Even Sum");
//? }else{
//?     console.log("Odd Sum")
//? }

//* Question 3
// Character Case Checker - Ask the user for a single character.
// Check if it's uppercase, lowercase, or neither (not a letter).

//? let input = prompt("Enter a single character : ")
//? if(input >= "A" && input <= "Z"){
//?     console.log("character is : ", input, " : uppercase");
//? }else if(input >= "a" && input <= "z"){
//?     console.log("character is : ", input, " : Lowercase");
//? }else{
//?     console.log("Not a letter");
//? }


//* Question 4
// Largest of Three Numbers - Take three numbers as input and
// print the largest number among them without using
// Math.max().

//? let a = prompt("Enter 1st numbers: ");
//? let b = prompt("Enter 2st numbers: ");
//? let c = prompt("Enter 3st numbers: ");
//? if (a > b && a > c) {
//?   console.log(a);
//? } else if (b > a && b > c) {
//?   console.log(b);
//? } else {
//?   console.log(c);
//? }

//* Question 5
// Leap Year Checker - Ask the user for a year and determine if
// it's a leap year or not.

//? let input = prompt("Enter a year : ");
//? if (input % 4 == 0) {
//?   console.log("a leap year");
//? } else {
//?   console.log("Not a leap year");
//? }

//* Question 6
// Simple Calculator – Ask the user for two numbers and an
// operator (+, -, *, /). Perform the operation and display the result.

//? let user1 = prompt("Enter 1st number :");
//? console.log(user1);
//? let user2 = prompt("Enter 2nd number :");
//? console.log(user2);
//? let operator = prompt("Enter the operator : ");
//? console.log(operator);
//? if (operator == "+") {
//?   console.log(user1 + user2);
//? } else if (operator == "-") {
//?   console.log(user1 - user2);
//? } else if (operator == "*") {
//?   console.log(user1 * user2);
//? } else if (operator == "/") {
//?   console.log(user1 / user2);
//? } else {
//?   console.log("something went wrong");
//? }

//* Question 7
// Positive, Negative, or Zero – Take a number input and check if it
// is positive, negative, or zero.

//? let input = +prompt("Enter the number : ");
//? if(input > 0){
//?     console.log(input +" : Number is positive");
//? }else if(input < 0){
//?     console.log( input +" : Number is Negative");
//? }else{
//?     console.log("Number is zero");
//? }

//* Question 8
// User Greeting – Ask for the user's name and time (24-hour
// format). Greet them accordingly:
//  5 AM–12 PM: "Good Morning, [Name]!"
//  12 PM–5 PM: "Good Afternoon, [Name]!"
//  5 PM–9 PM: "Good Evening, [Name]!"
//  9 PM–5 AM: "Good Night, [Name]!"

//? let username = prompt("Enter the Name : ");
//? let timeFormat = prompt("Enter the Time : ");
//? if (timeFormat >= 5 && timeFormat < 12) {
//?   console.log("Good Morning , ", username);
//? } else if (timeFormat >= 12 && timeFormat < 17) {
//?   console.log("Good Afternoon , ", username);
//? } else if (timeFormat >= 17 && timeFormat < 21) {
//?   console.log("Good Evening , ", username);
//? } else if (timeFormat >= 21 && timeFormat < 5) {
//?   console.log("Good Night , ", username);
//? } else {
//?   console.log("Invalid : Time");
//? }

//* Question 9
// Traffic Light System – Ask the user for a traffic light color (red,
//     yellow, green). Print appropriate messages:
//      Red: "Stop!"
//      Yellow: "Get Ready!"
//      Green: "Go!"

//? let input = prompt("Enter Traffic light color : ");
//? if (input == "red") {
//?   console.log("Red: 'Stop!' ");
//? } else if (input == "yellow") {
//?   console.log("Yellow: 'Get Ready!' ");
//? } else if(input == "green") {
//?   console.log("Green: 'G0!' ");
//? }else{
//?     console.log("Invalid Color");
//? }

//* Question 10
// Multiplication Table – Ask the user for a number and print its
// multiplication table up to 10.

//? let table = +prompt("Enter the number to print table of it : ");
//? for (let i = 1; i <= 10; i++) {
//?   let result = table * i;
//?   console.log(table + "*" + i + "=" + result);
//? }

//* Question 11
// Grade Calculator – Ask the user for their marks (0-100).
// Assign grades based on the range:
//  90-100: A
//  80-89: B
//  70-79: C
// 60-69: D
// Below 60: F

//? let input = +prompt("Enter your marks from 0 - 100 :");
//? console.log(input);
//? if(input>= 90 && input < 100){
//?     console.log("A");
//? }else if(input>= 80 && input <= 89){
//?     console.log("B");
//? }else if(input>= 70 && input <= 79){
//?     console.log("C");
//? }else if(input>= 60 && input <= 69){
//?     console.log("D");
//? }else{
//?     console.log("F");
//? }

//* Question 12
// Simple Login System – Set a predefined username and
// password. Ask the user to enter their credentials using
// prompt(). If correct, print “Login Successful”; otherwise, print
// “Incorrect username or password.”

//? const username = "admin";
//? const password = "admin";
//? let inputName = prompt("Enter the username");
//? let inputPass = prompt("Enter the Password");
//? if(inputName == username && inputPass == password){
//?     console.log("Login Successfull");
//? }else if(inputName != username && inputPass != password){
//?     console.log("Both username and Password wrong");
//? }else if(inputName == username && inputPass != password){
//?     console.log("Password is wrong");
//? }else if(inputName != username && inputPass == password){
//?     console.log("username is wrong");
//? }else{
//?     console.log("Something went wrong");
//? }

//* Question 13
// Swapping Without Third Variable – Take two numbers from the
// user and swap their values without using a third variable.

//? let a = +prompt("Enter first number");
//? let b = +prompt("Enter Second number");
//? console.log("Before Swapping : a is ", a, " b is ", b);
//? a = a + b;
//? b = a - b;
//? a = a - b;
//? console.log("After Swapping : a is ", a, " b is ", b);

//* Question 14
// FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a
// multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if
// only 5, print “Buzz”; otherwise, print the number itself.

//? let input = prompt("Enter the Number : ");
//? if (input % 3 == 0 && input % 5 == 0) {
//?   console.log("FizzBuzz");
//? } else if (input % 3 == 0) {
//?   console.log("Fizz");
//? } else if (input % 5 == 0) {
//?   console.log("Buzz");
//? } else {
//?   console.log(input);
//? }

//* Question 15
// Number Reversal – Take a three-digit number from the user
// and print its reverse. (Example: 123 → 321).

//? let input = prompt("Enter a three-digit number: ");
//? let arr = input.split("");
//? let reverseArr = arr.reverse().join("");
//? let reversedNumber = Number(reverseArr);
//? console.log(`User input is: ${input} and reverse is: ${reversedNumber}`);

//* Question 16
// Sum of Digits - Take a number from the user and print the sum
// of its digits. (Example: 123 —Y 1+2+3 = 6).

//? let input = prompt("Enter a three-digit number: ");
//? let arr = input.split("");
//? let sum = 0;
//? for (let i = 0; i < arr.length; i++) {
//?   sum += Number(arr[i]);
//? }
//? console.log("Sum of digits:", sum);

//* Question 17
// Palindrome Checker — Ask the user for a word. Check if it
// reads the same forward and backward. Print "Palindrome" or
// "Not a Palindrome."

//? let input = prompt("Enter a number: ");
//? let arr = input.split("");
//? let reverseArr = arr.reverse().join("");
//? let reversedNumber = Number(reverseArr);
//? if(input == reversedNumber){
//?     console.log("Palindrome occur");
//? }else{
//?     console.log("Panlindrome not occur");
//? }

//* Question 18
// Reverse without string methods - ask user from number and reverse it without using split , reverse, join

//? let input = prompt("Enter three number: ");
//? let result ="";
//? for (let i = input.length - 1; i >= 0; i--) {
//?    result = result + input[i];
//? }
//? console.log(result);

//* Question 19
// find second largest numbers from three numbers as input

//? let a = +prompt("Enter 1st number: ");
//? let b = +prompt("Enter 2nd number: ");
//? let c = +prompt("Enter 3rd number: ");
//? if ((a < b && a > c) || (a < c && a > b)) {
//?   console.log(`Second largest : ${a}`);
//? } else if ((b < a && b > c) || (b < c && b > a)) {
//?   console.log(`Second largest : ${b}`);
//? } else if ((c < b && c > a) || (c < a && c > b)) {
//?   console.log(`Second largest : ${c}`);
//? } else {
//?   console.log(`There is no Second largest`);
//? }

//* Question 20





//* Question 21
// Even Digit Counter — Take a number from the user and count
// how many even digits it has.

//? let input = prompt("Enter a number: ");
//? let arr = input.split("");
//? console.log(arr);
//? let result;
//? for (let i = 0; i <= arr.length; i++) {
//?   result = i;
//? }
//? console.log(result);

//* Question 22
// Nested Condition Challenge - Ask the user for their age and
// salary. Print a message based on conditions:
// If age is below 18, print "Not eligible"
// If age is 18 or more but salary is less than *20,000, print "Low
// Salary"
// If salary is or more, print "High Salary"
// Otherwise, print "Medium Salary"

//? let age = +prompt("Enter your age : ");
//? let salary = +prompt("Enter your salary : ");
//? if (age < 18) {
//?   console.log("Not eligible");
//? } else if (age >= 18) {
//?   if (salary < 20000) {
//?     console.log("low Salary");
//?   } else {
//?     console.log("High Salary");
//?   }
//? } else {
//?   console.log("Medium Salary");
//? }

//* Question 23
// Toggle Case — Ask the user for a word and toggle the case of
// every character. Example: HeLLo hEllO.

//? let input = prompt("Enter a word mixture of upper and lower case : ");
//? let arr = input.split("");
//? for (let i = 0; i < arr.length; i++) {
//?   if (arr[i] == arr[i].toUpperCase()) {
//?     arr[i] = arr[i].toLowerCase();
//?   } else {
//?     arr[i] = arr[i].toUpperCase();
//?   }
//? }
//? console.log(arr.join(""));


//* Question 24
//* Question 25
