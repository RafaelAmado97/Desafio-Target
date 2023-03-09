const minhaString = 'Rafael';


// Quebrar a string em um array de caracteres
const arrayDeCaracteres = minhaString.split('');

//Inverter este array
const arrayInvertido = arrayDeCaracteres.reverse();


//Juntar os caracteres novamente em uma string
const stringInvertida = arrayInvertido.join('');

console.log('String original:', minhaString);
console.log('String invertida:', stringInvertida);

