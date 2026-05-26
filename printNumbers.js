// Print numbers from 1 to n
function printAscendingNumbers(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}

// Print numbers from n to 1
function printDescendingNumbers(num) {
  for (let i = 1; i <= num; i++) {
    console.log(num + 1 - i);
  }
}

printAscendingNumbers(5);
printDescendingNumbers(5);
