const number = 9;

console.log(`O número ${number} é ` +
    (number % 2 === 0 ? "Par" : "Ímpar"));

/*-----------------------------------------------*/
{
const age = 20;

console.log(`Eu tenho ${age} anos, sou maior de idade? ` +
    (age >= 18 ? "Sim" : "Não"));
}
/*-----------------------------------------------*/

const learnedJs = true;
const learnedNode = true;

console.log( 
    learnedJs && learnedNode
        ? "Apredeu a programar! Esse cara é bom graças a Deus"
        : learnedJs ? "Aprendeu a programar" : "Não aprendeu a programar"
);

/*-----------------------------------------------*/

const bank = 400;
const transferValue = 500;

console.log(transferValue < bank ? 
    "A transferência pode ser feita" : "A transferência não pode ser feita"
);

/*-----------------------------------------------*/

const isAdult = true;

console.log(`Eu ${isAdult ? "sou" : "não sou"} adulto`);

/*-----------------------------------------------*/

const hours = 14;

console.log(
    "Está de",
    hours >= 0 && hours < 6 ? "madrugada" : 
    hours >= 6 && hours < 12 ? "manhã" : 
    hours >= 12 && hours < 18 ? "tarde" : noite
);

/*-----------------------------------------------*/

const age = 70

console.log(
      "Eu sou", 
      age >= 0 && age < 12 ? "criança" :
      age >= 12 && age < 18 ? "adolescente" :
      age >= 18 && age < 60 ? "adulto" : "idoso"
);
