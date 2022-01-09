const invertir = (word) => {
  let invert = "";
  for (const i of word) {
    invert = i + invert;
  }
  console.log(invert);
};

const invertir2 = (word) => {
  console.log(word.split("").reverse().join(""));
};

invertir("Hola como estas?");
invertir2("Hola como estas?");
