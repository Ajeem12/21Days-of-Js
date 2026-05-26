// Print numbers divisible by both 3 and 5
function printNumbersDivisibleBy3And5(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
}

printNumbersDivisibleBy3And5(150);
