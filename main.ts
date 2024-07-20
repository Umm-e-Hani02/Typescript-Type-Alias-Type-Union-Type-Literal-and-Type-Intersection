/*-------------------------------------------------------------------------------------------------------------
 *------------------------------------------------- TYPE ALIAS  -----------------------------------------------
 *-------------------------------------------------------------------------------------------------------------*/

// A type alias in TypeScript allows you to give a custom name to a type. It simplifies using complex types by allowing 
// you to refer to them with a shorter, more readable name. This is done using the type keyword. Type aliases make it 
// easier to work with objects and complex data structures by providing a straightforward way to define and use them.

// Here is an example of TYPE ALIAS
type Car = {
    name: string;
    colour: string;
    model: number;
    powerStearing: boolean; 
    horsepower: string;
};

let carInfo: Car = {
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

let stringOrNumber: string | number;
stringOrNumber = "Hello, World!"; // This is okay
stringOrNumber = 21; // This is also okay
// stringOrNumber = true; // Throws error because type boolean is not defined

// ------------------------------------------------------------------------------------------------------------
// ----------------------------------------------- TYPE LITERALS ----------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// Type literals in TypeScript are used to define specific values a variable can hold. Unlike type unions which allow multiple 
// types, type literals restrict a variable to a specific set of values. They are commonly used to limit the allowed values of a 
// variable to a predefined set.

let country: "Pakistan" | "Dubai" | "Malaysia";
country = "Pakistan"; // This is okay
// country = "USA"; // Error: Type '"USA"' is not assignable to type '"Pakistan" | "Dubai" | "Malaysia"'

// ------------------------------------------------------------------------------------------------------------
// ----------------------------------------- TYPE INTERSECTION ------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// Type intersections in TypeScript combine multiple types into one. A variable of an intersection type must satisfy all the combined 
// types. This is useful for merging multiple type definitions into a single type using the & symbol.

// Basic student information
type StudentBio = {
    name: string;
    age: number;
    dob: number;
};

// Additional student department details
type StudentDepartment = {
    depName: string;
    faculty: "bcom" | "bscs" | "ba";
};

// Combining StudentBio and StudentDepartment into a single type
type Student = StudentBio & StudentDepartment;

let student: Student = {
    name: "Faariya",
    age: 19,
    dob: 2001,
    depName: "Commerce", 
    faculty: "bcom"
};

console.log("\nStudent Information:");
console.log(student);
