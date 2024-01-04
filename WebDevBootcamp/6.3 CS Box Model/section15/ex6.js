function whosPaying (names) {
    let numberOfPeople = names.length;
    let randomPosition = Math.floor(Math.random() * numberOfPeople);
    let randomPerson = names[randomPosition];

    return randomPerson + " is going to buy lunch today."
}