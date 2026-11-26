// TODO: Create a function called ‘multiply’ that will take in 3 parameter andmultiplyall 3 numbers together. Note: The argument passed must NOT be the same number. 

function multiply(num1, num2, num3) {
    return num1 * num2 * num3
}

console.log(multiply(35, 26, 7))

// TODO: Create a function expression called ‘convertToSeconds’ that takes inanumber of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***

const convertToSeconds = function(minutes) {
    return minutes * 60
}

console.log(convertToSeconds(124))

// TODO: Create a function called fahrenheitToCelsius that takes the temperature as a parameter and returns the equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***

function fahrenheitToCelsius(temperature) {
    return (temperature - 32) * 5 / 9
}

console.log(fahrenheitToCelsius("97"))

// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***

function reverseOfString(string){
    return string.split("").reverse().join("")
}

console.log(reverseOfString("Rosary"))

// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output = 3 ***Do not use a console.log() inside of the function***

function countVowels(sentence) {
    let count = 0;
    const vowels = "aeiou"

    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i].toLowerCase())) {
            count++
        }
    }

    return count
}

console.log(countVowels("Unanimous"))

// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your codewith4numbers

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}

console.log(isPrime(2))
console.log(isPrime(7))
console.log(isPrime(10))
console.log(isPrime(13))