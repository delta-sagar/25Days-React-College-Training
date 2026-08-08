
// 1. Create four arrow functions for addition, subtraction, multiplication, and division. Display the results.



const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

console.log(`Addition: ${add(10, 5)}`);
console.log(`Subtraction: ${subtract(10, 5)}`);
console.log(`Multiplication: ${multiply(10, 5)}`);
console.log(`Division: ${divide(10, 5)}`);


// 2.  Create a student profile using const, let, an arrow function, and template literals.


const name = "Sagar";
 let age = 19;
  const branch = "Computer Science"; 
  const college = "MITRC College"; 
  const showProfile = () =>
    {  
          console.log(`Name: ${name}`);  
          console.log(`Age: ${age}`);  
          console.log(`Branch: ${branch}`);   
          console.log(`College: ${college}`);
    };
         
         
showProfile();