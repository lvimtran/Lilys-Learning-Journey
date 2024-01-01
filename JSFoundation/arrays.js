/*//Find element
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

const course = courses.find(course => course.name === 'a');

console.log(course) */


/*//Empty array

const numbers = [1, 2, 3, 4]
//Solution 1
numbers = [];

//Solution 2
numbers.length = 0

//Solution 3
numbers.splice(0, numbers.length);

//Solution 4
while (numbers.length > 0)
    numbers.pop(); */


/*//Combine and slice array
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined1 = first.concat(second);

const combined2 = [...first, 'a', ...second, 'b'] 

const slice = combined.slice(2);*/


/*//Sorting array
const courses = [
    {id: 1, name: 'Node.js'},
    {id: 1, name: 'JavaScript'},
];

courses.sort(function(a, b) {

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase()

    if (nameA < nameB) return -1;
    else if (nameA > nameB) return 1;
    return 0;
}) */



/*//Filtering an Array
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(value => value >= 0);
*/


/*//Mapping an Array
const numbers = [1, -1, 2, 3];

const items = numbers.filter(n => n >= 0).map(n => ({value: n}));
console.log(items); */


/*//Ex1:Array from range
const numbers = arrayFromRange(-10, -4)

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++){
        output.push(i);
    } return output;
} */



/*//Ex2: Includes
const numbers = [1, 2, 3, 4]
console.log(numbers.includes(1))

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
        return false;
}*/



/*//Ex3: Except
const numbers = [1, 2, 3, 4];
const output = except(numbers, [1]);
console.log(output)

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}*/


/*//Ex4: Moving Element
const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 1);
console.log(output);
console.error

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length) {
        console.error("Invalid offset");
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output;
}*/


/*//Ex5: Count Occurrence
const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, -1);

console.log(count);

function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    })
} */



//Ex6: Get Max
const numbers = [1, 2, 3, 4]
const max = getMax([]);
console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a,b) => (a > b) ? a : b)
}


//Ex7: Movies
const movies = [ 
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2018, rating: 4.2}
]

movies.filter(m => m.year === 2018 && m.rating >= 4).sort((a, b) => a.rating - b.rating)



