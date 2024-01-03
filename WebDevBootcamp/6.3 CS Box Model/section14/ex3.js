function bmiCalculator(weight, height) {
    let bmi = weight/(height*height)
    return Math.round(bmi)
}