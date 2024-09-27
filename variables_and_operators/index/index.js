// let can be reassigned but no redeclared
// const cannot be reassigned or redeclared
// var can be reassigned and redeclared but we normally avoid using var as it could add randomness to the code

let name1 = "John";
let surname = "Doe";

console.log(name1);
console.log(surname)

name1 ="Richard"     // here name1 and surname is reassigned as per the let properties 
surname = "Williams"

console.log(name1)
console.log(surname)

const pi =3.14159;
// pi = 10;         //if comment is removed from pi in this line it would return error as reassignment is illegal 

console.log(pi)

// console.log((3+2)-76*(1+1))

// console.log(23+97)

// console.log(1+55+923+65+37+82)

// console.log((4+6+9)/77)

// let a = 10

// 9*a
// let b = 7*a
// console.log(b)

const max = 57

const actual = max - 13

const percentage = actual/max;

console.log(percentage)