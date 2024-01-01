/*//Object-oriented Programming (OOP)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    },
};

circle.draw(); */

/*
//Factory Function
function createCircle(radius) {
    return{
        radius,
        draw() {
            console.log("draw");
        }
    };
}

const circle1 = createCircle(1);

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

const another = new Circle(1); */

/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = Circle(1); */


/*
let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(number);
console.log(number); */

//--------------EXCERCISE------------------
/*//Ex1
//street
//city
//zipCode
//showAddress

let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddress(address) {
    for (let key in address)
        console.log(key,address[key]);
}

showAddress(address); */


/*//Ex2
//Factory Function
let address1 = createAddress('a', 'b', 'c');
function createAddress (street, city, zipCode) {
    return{
        street,
        city,
        zipCode
    };
}
//Constructor Function
let address2 = new Address('a', 'b', 'c');
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
} */



/*//Ex3: Object Equality
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
} 

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2
}
*/



/*//Ex4: Blog Post Object
let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'},
        {author: 'a', body: 'b'}
    ],
    isLive: true,
}; */

/*//Ex5: Build Constructor Function
let post = new Post('a', 'b', 'c');

console.log(post);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false
} */


let priceRanges = [
    {label: '$', toolTip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', toolTip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', toolTip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
]

let restaurants = [
    {averagePerPerson: 5}
]
