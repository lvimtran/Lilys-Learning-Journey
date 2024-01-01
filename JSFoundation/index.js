/* OBJECTS
let person = {
    name: "Lily",
    age: 21
};

//Dot Notation
person.name = "Anthony"
person.age = "34"

//Bracket Notation
let selection = "name"
person[selection] = "Xiu"

console.log(person.name) */



/* ARRAY
let selectedColors = ["red", "blue"]
selectedColors[2] = "green"
console.log(selectedColors.length) */



/* FUNCTION
function greet(name, lastName) {
    console.log("Hello " + name + ' ' + lastName)
}

function square(number) {
    return number * number
}

let number = square(2)
console.log(number) */



//Strict Equality (Check Type and Value): x === 1 | x !== 1 | console.log("1" === 1)
//Lose Equality (Only check Value)



/* BITWISE OPERATORS
const readPermission = 4
const writePermission = 2
const executePermission = 1

let myPermission = 2
myPermission = myPermission | writePermission

let message = (myPermission & writePermission) ? "Yes" : "No"

console.log(message) */



/* SWAPPING VARIABLES
let a = "red"
let b = "blue"

let c = a
a = b 
b = c

console.log(a)
console.log(b) */
