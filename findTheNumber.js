function findMax(a, b, c) {
  if (a >= b && a >= c) {
    console.log("a:", a);
  } else if (b >= a && b >= c) {
    console.log("b:", b);
  } else {
    console.log("c:", c);
  }
}

findMax(13, 13, 3.7);

function findPosNeg(a) {
  if (a > 0) {
    console.log("positive", a);
  } else if (a < 0) {
    console.log("negative", a);
  } else {
    console.log("zero", a);
  }
}

findPosNeg(-4);
