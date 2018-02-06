function balikKata(kata) {
  var teks = '';

  for (var posisi = kata.length - 1; posisi >= 0; posisi--) {
    teks += kata[posisi];
  }
  return teks;
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
