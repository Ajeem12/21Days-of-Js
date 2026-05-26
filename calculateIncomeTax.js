function calculateIncomeTax(income) {
  if (income <= 250000) {
    console.log(0);
  } else if (income <= 500000) {
    console.log((income - 250000) * 0.05);
  } else if (income <= 1000000) {
    console.log(250000 * 0.05 + (income - 500000) * 0.2);
  } else {
    console.log(250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3);
  }
}

calculateIncomeTax(750000); // 62500
calculateIncomeTax(1200000); // 172500
