
/*
Exercise 2:
You are given the age of a moviegoer.
If the age is less than or 12, log the ticket price as "$5" to the console.
If the age is between 13 and 17 (inclusive), log the ticket price as "$8" to the console.
If the age is 18 or older, log the ticket price as "$10" to the console.
Use "if" statements to take the ages as arguments and log the correct price to the console.
*/

// Do not modify:
let age = 12;

// Type your code here:

if (age <= 12) {
    console.log("The ticket price is $5");
}

else if (age >= 13 && age <= 17) {
    console.log("The ticket price is $8");
}

else if (age >= 18) {
    console.log("The ticket price is $10");
}

console.log("End of program");

