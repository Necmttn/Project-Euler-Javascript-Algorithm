

// Creating Numbers Array.
var numbers = []

for (var i = 0; i < 1000; i++){
  numbers.push(i)
}

// Function which returns Summary of 3 and 5 times.
var sumOfThreeAndFiveTimes = numbers.filter(function(number){
  return number % 3 === 0 || number % 5 === 0;
}).reduce(function(a,b){
  return a + b;
},0);

console.log(sumOfThreeAndFiveTimes);

// TODO:Refactor this code using only Reduce function
