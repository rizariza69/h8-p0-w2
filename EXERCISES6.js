1.
//LOOPING PERTAMA
var deret = 0;

while(deret < 20) {
  deret +=2;  /
   console.log(deret + " - I love coding");

}

//LOOPING KEDUA
var deret = 20;
var jumlah = 0;

while(deret > 0) {
  jumlah += deret;
  console.log(deret+'  - I will become fullstack developer ') /
  deret -=2;
}



2.

LOOPING PERTAMA
for(var angka = 1; angka <= 20; angka++) {
  console.log(angka + ' - I Love Coding');
}


LOOPING KEDUA
for(var angka = 20; angka > 0; angka--) {
  console.log(angka + ' - I will become fullstack developer');
}

3.

//3. Angka Ganjil dan Genap
//Problem 1 (Perulangan 1 - 100)

var flag = 1;

while(flag <= 100) {
    console.log(flag + ' - Counter');
    flag++;
}


//Problem 2 (Ganjil & Genap)

var flag = 101;

while(flag > 0) {
  flag = flag-2;
}
if (flag === 0)
    {console.log('Genap')}
  else
    {console.log('Ganjil')}


//Problem 3 (Counter 2)

var flag = 9;

while(flag > 0) {
  flag = flag-3;
}
if (flag === 0)
    {console.log('3 kelipatan 3')}
  else
    {console.log('')}

//Problem 3 (Counter 5)

var flag = 1;

while(flag > 0) {
  flag = flag-6;
}
if (flag === 0)
    {console.log('6 kelipatan 6')}
  else
    {console.log('')}


//Problem 3 (Counter 9)

var flag = 110;

while(flag > 0) {
  flag = flag-10;
}
if (flag === 0)
    {console.log('10 kelipatan 10')}
  else
    {console.log('')}
