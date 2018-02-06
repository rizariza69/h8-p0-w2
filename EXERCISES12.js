EXERCISE 12 : Konversi Menit

var konversiMenit = function (number) {
    var menit =Math.floor(number/60);
    var detik = number%60 ;
  console.log(menit + ": " + detik);
}


console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
