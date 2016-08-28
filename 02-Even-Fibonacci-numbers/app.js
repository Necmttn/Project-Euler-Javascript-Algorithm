
// Start with first 2 term and a variable to track the sum
var a = 1;
var b = 1;
var sum = 0;

// Loop while it's lower than 4 million
while (a < 4000000){

// if a is even, add it to the sum
  if (a % 2 == 0){
    sum += a
  }
// Create a new variable "c" that holds the sum of a and b
// then finally update a and b as they keep adding.
  var c = a + b
  a = b;
  b = c;
}
// Display the sum
console.log(sum);
