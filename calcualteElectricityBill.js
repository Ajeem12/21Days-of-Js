function calcElectricityBill(unit) {
  if (unit <= 100) {
    console.log("Bill:", unit * 5);
  } else if (unit <= 200) {
    console.log("Bill:", 100 * 5 + (unit - 100) * 7);
  } else if (unit <= 300) {
    console.log("Bill:", 100 * 5 + 100 * 7 + (unit - 200) * 10);
  } else {
    console.log("Bill:", 100 * 5 + 100 * 7 + 100 * 10 + (unit - 300) * 12);
  }
}

calcElectricityBill(110);
