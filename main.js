"use strict";
/*-------------------------------------------------------------------------------------------------------------
 *------------------------------------------------- TYPE ALIAS  -----------------------------------------------
 *-------------------------------------------------------------------------------------------------------------*/
let carInfo = {
    name: "BRV",
    colour: "Black",
    model: 2023,
    powerStearing: false,
    horsepower: "1200cc"
};
console.log("Car Information:");
console.log(carInfo);
// ------------------------------------------------------------------------------------------------------------
// ----------------------------------------------- TYPE UNION -------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// A type union in TypeScript allows a variable to hold values of multiple specified types. It combines different types into one 
// using the | symbol. For example, a variable can be either a string or a number:
let stringOrNumber;
stringOrNumber = "Hello, World!"; // This is okay
stringOrNumber = 21; // This is also okay
// stringOrNumber = true; // Throws error because type boolean is not defined
// ------------------------------------------------------------------------------------------------------------
// ----------------------------------------------- TYPE LITERALS ----------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// Type literals in TypeScript are used to define specific values a variable can hold. Unlike type unions which allow multiple 
// types, type literals restrict a variable to a specific set of values. They are commonly used to limit the allowed values of a 
// variable to a predefined set.
let country;
country = "Pakistan"; // This is okay
let student = {
    name: "Faariya",
    age: 19,
    dob: 2001,
    depName: "Commerce",
    faculty: "bcom"
};
console.log("\nStudent Information:");
console.log(student);
