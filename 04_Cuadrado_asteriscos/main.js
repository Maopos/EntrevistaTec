const cuadrado = (lado) => {
  for (let i = 0; i < lado; i++) {
    let serie = "";
    for (let j = 0; j < lado; j++) {
      if (i === 0) {
        serie += "* ";
      } else if (i === lado - 1) {
        serie += "* ";
      } else if (i != 0 && i != lado - 1) {
        if (j === 0 || j === lado - 1) {
          serie += "* ";
        } else {
          serie += "  ";
        }
      }
    }
    console.log(serie);
  }
};

cuadrado(30);
