const checkYuGiOh = require('./checkYuGiOh');
const convertFahrToCelsius = require('./convertFahrToCelsius');

console.log('####### convert Fahrenheit to Celsius #######');
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius('0'));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));

console.log('####### checkYuGiOh  #######');
console.log(checkYuGiOh(10));
console.log(checkYuGiOh(5));
console.log(checkYuGiOh('fizzbuzz is meh'));
