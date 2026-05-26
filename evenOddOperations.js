// Print even numbers
function printEvenNumbers(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// Sum of even numbers
function sumOfEvenNumbers(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  console.log(sum);
}

// Sum of odd numbers using loop
function sumOfOddNumbers(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  console.log(sum);
}

// Optimized formula for sum of odd numbers
function optimizedOddSum(num) {
  let result = num * num;
  console.log(result);
}

printEvenNumbers(10);
sumOfEvenNumbers(10);
sumOfOddNumbers(10);
optimizedOddSum(5);
