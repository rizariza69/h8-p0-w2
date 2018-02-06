function xo(str) {
  var countO = 0;
  var countX = 0;

  for (var i = 0 ; i < str.length ; i++ ) {
  if (str[i] === 'x' ) {
    countX += 1
  } else {
    countO += 1
  }


  }
  return countO === countX
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
