// Optimized sum using formula
function optimizedSum(num) {
  let result = (num * (num + 1)) / 2;
  console.log("Fast:", result);
}

// Sum using loop
function iterativeSum(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  console.log("Slow:", sum);
}

// Incorrect formula fixed
function sumWithoutDivision(num) {
  let result = num * (num + 1);
  console.log(result);
}

optimizedSum(5000000000000);
iterativeSum(10);
sumWithoutDivision(5);
