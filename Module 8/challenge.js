// map 
let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];
let result = primeNumbers.map(function(num) {
    return num * 5;
});

console.log(result);


// template string
let company = 'Leapfrog Technology'
let modNumber = 8;
let challengeName = ' JS Jatra';
let programmingLanguage = 'Javascript';
let version = 'ES6';

console.log(`This is Module ${modNumber} of ${challengeName} presented by ${company}`);
console.log(`${version} brings more features to ${programmingLanguage}`);


// destructing
let smartphone = {
    model: "Google Pixel 3 XL",
    os: "Android 9.0",
    screensize: "6.30 inches",
    ram: "4 GB",
    batterycapacity: "3420 mAh"
}

let {model, os, screensize, ram, batterycapacity} = smartphone;
console.log(model, os, screensize, ram, batterycapacity);


// spread operator
var oldArray = ['Ferrari', 'Lamborghini', 'BMW', 'Audi', 'Buggati', 'Mercedes', 'Jaguar']; // array of cars
let newArray = [...oldArray];
console.log(newArray);