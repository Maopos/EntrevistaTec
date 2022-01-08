// Buscar una palabra en una frase
phrase =
  "Esa pregunta me la hicieron -y me la hice, lo admito- cientos de veces antes de emigrar al viejo continente, por allá en abril de 2021, con sólo dos valijas, una mochila y ahorros suficientes para subsistir los primeros meses. Llegué a Dinamarca y luego de algunos experimentos, el destino me llevó a trabajar en un Café muy especial de Copenhague, con casi nula experiencia en el rubro. ¿Qué aprendí sobre la hostelería en mi transcurso por la Licenciatura en Relaciones Internacionales? Exacto: NADA! Hoy, 6 meses después, me encuentro trabajando como encargado del turno tarde en el mismo café. Mi jefe y dueño del lugar me dio las llaves y tengo el doble de responsabilidades que cuando comencé. ¿Encargado?";

word = "y";

const busqueda = (word, phrase) => {
  formated = phrase.toLowerCase().replace(/[¿?;:,.-]/gi, "");
  word = word.toLowerCase();
  let result = 0;
  let mapa = {};
  if (formated.includes(word)) {
    let wordsArray = formated.split(" ");

    for (let i of wordsArray) {
      if (i === word) {
        result++;
      }
      if (!mapa[i]) {
        mapa[i] = 1;
      } else {
        mapa[i]++;
      }
    }
  }
  console.log(mapa);

  return result;
};

console.log(busqueda(word, phrase));
