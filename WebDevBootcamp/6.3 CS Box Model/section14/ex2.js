function lifeInWeeks(age) {
    let remainingYear = 90 - age;
    let x = remainingYear * 365;
    let y = remainingYear * 52;
    let z = remainingYear * 12;
    console.log("You have", x, "days,", y, "weeks, and", z, "months left.")
}