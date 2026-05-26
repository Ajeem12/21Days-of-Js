// Print square of all numbers
function printSquareNumbers(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i * i);
  }
}

// Print even perfect squares only
function printEvenSquareNumbers(num) {
  for (let i = 1; i * i <= num; i++) {
    if ((i * i) % 2 === 0) {
      console.log(i * i);
    }
  }
}

printSquareNumbers(20);
printEvenSquareNumbers(20);
