function multi(a, b) {
  if (a > 5 || b > 7) {
    return a * b;
  } else {
    return a - b;
  }
}
var res = multi(10, 3);
alert(res);
