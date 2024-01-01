/*//Max of two numbers
function (a, b) {
    return (a > b) ? a : b;
}*/



/* //Landscape or Portrait
console.log(isLandscape(800, 600));

function isLandscape (width, height){
    return (width > height); 
} */



 //FizzBuzz
//Divisible by 3 =>> Fizz
//Divisible by 5 =>> Buzz
//Divisible by both 3 and 5 =>> FizzBuzz
//Not divisible by either 3 or 5 =>> input
//Not a number => "Not a number"
const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== "number")
        return NaN;

    if ((input % 3 === 0) & (input % 5 === 0))
        return "FizzBuzz";

    if (input % 3 === 0)
        return "Fizz";

    if (input % 5 === 0)
        return "Buzz";
} 



/* //Even and Odd numbers
showNumbers(10);
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? "Even" : "Odd"
        console.log(i, message)
    }
} */




/* //COUNT TRUTHY *****
const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value) count++;
    return count;
} */





/* //String Properties
const movie = {
    title: "a",
    releaseYear: 2018,
    rating: 4.5,
    director: "b"
};

showProperties(movie);

function showProperties(object) {
    for (let key in object){
        if (typeof object[key] === "string")
        console.log(key, object[key]);
    }
} 

const movie = {
    name: "Cinderella",
    age: 18,
    yearRelease: 2018,
    audience: "Xiu and friends"
};

showString(movie)

function showString(obj) {
    for (key in obj){
        if (typeof obj[key] === "string"){
            console.log(key, obj[key])
        }
    }
} */




/* //Sum of multiples 3 and 5
console.log(sum(10));
function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++){
        if (i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    } return sum
}*/




/*//Grade
const marks = [80, 80, 50];

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return "F";
    if (average < 70) return "D";
    if (average < 80) return "C";
    if (average < 90) return "B";
    return "A";
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length
}*/




/* //Stars
showStars(10);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = "";
        for (let i = 0; i < row; i++){
            pattern += "*"
        } console.log(pattern);
    }
} */




/*//Primes
showPrimes(20)

function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) console.log(i);
    }
}

function isPrime(i) {
    for (let j = 2; j < i; j++){
        if (i % j === 0) {
            return false;
        }
    } return true;
}*/
