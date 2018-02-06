
1.

var row1 = 0;

  while(row1<5) {
    console.log('*');
    row1 = row1 +  1;

  }


2.
    var rows2 = 0;
    var jumlahBintang = 5;

    while(rows2 < jumlahBintang) {
      var rows3= 0;
      var bintang = '';

      while(rows3 < jumlahBintang) {
        bintang += '*';
        rows3++;

      }
      console.log(bintang);
      rows2++;
    }

3.
var counterLuar = 0;
var jumlahBintangLuar = 1;

while(counterLuar < jumlahBintangLuar) {
  var counterDalam = 0;
  var jumlahBintangDalam = 5;
  var bintang = '';

  while(counterDalam < jumlahBintangDalam) {
    bintang += '*';
    counterDalam++;
    console.log(bintang);
  }
  counterLuar++;
}
