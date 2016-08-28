// Task
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


var numbers = []

for (var i = 0; i < 1000; i++){
  numbers.push(i)
}

var sumOfThreeAndFiveTimes = numbers.filter(function(number){
  return number % 3 === 0 || number % 5 === 0;
}).reduce(function(a,b){
  return a + b;
},0);

console.log(sumOfThreeAndFiveTimes);
