const palindrmo = (word) => {
  let invert = word.split("").reverse().join('')
  invert === word
    ? console.log("Si es palindromo")
    : console.log("No es palindromo"); 
  console.log(invert);
  console.log(word);
};

palindrmo("allivesevilla");
