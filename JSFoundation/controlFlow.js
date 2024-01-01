/* IF - ELSE

// Hour
//If hour is between 6am and 12pm: Good morning!
//If it is between 12pm and 6pm: Good afternoon!
//Otheriwse: Good evening!

let hour = 22;

if (hour >= 6 && hour < 12) {
    console.log("Good morning")
}
else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon")
}
else
    console.log("Good evening") */




/*SWITCH - CASE

let role
switch (role) {
    case "guest": 
        console.log("Guest User")
        break
    
    case "moderator":
        console.log("Moderator User")
        break

    default:
        console.log("Unknown User")
} */



/* LOOP (FOR, WHILE, DO.. WHILE)

for (let i = 0; i < 5; i++){
    console.log("Hello Xiu ")
}

let i = 0 
while (i <= 5) {
    if (i % 2 !== 0) console.log(i)
    i++
}

let j = 9
do {
    if (j % 2 !== 0) console.log(j, "J VALUE")
    j++
} while (j <= 5) */



/* FOR..IN | FOR..OF
const person = {
    name: "Lily",
    age: "20"
}
for (let key in person)
    console.log(key, person[key])


const colors = ["red", "green", "blue"]
for (let color of colors)
    console.log(color)  */



let number = max(1, 2)
console.log(number)

function max(a, b) {
    return (a > b) ? a : b
}