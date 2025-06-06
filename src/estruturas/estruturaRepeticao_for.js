

for(let i = 0; i <= 10; i++){
    //setTimeout(() => console.log(i), 200 * i)
}

for(let i = 10; i >= 0; i--){
    console.log(i);
}
/*-----------------------------------------------*/
const numbers = [];

for (let i = 1; i <= 10; i++){
    numbers.push(i);
}
console.log(numbers);
/*-----------------------------------------------*/
const fruits = ["maça" , "banana", "laranja", "uva"];

for (let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}
/*-----------------------------------------------*/
const text = "Foque e se esforçe que Deus faz o resto";
const letter = "o";
let times = 0;
for(const char of text.toLocaleLowerCase()){
    if (char === letter) times ++;
}

console.log(`A letra ${letter} se repete ${times} vezes`);
/*-----------------------------------------------*/
const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});

prompt.question("Qual numero deseja ver a tabuada ", answer =>{
    const number = Number.parseInt(answer);

    if (Number.isNaN(number)){
        console.log("Número digitado inválido");
    } else {
        console.log(`A tabuada do ${number} é: `);
        for (let i=0; i<=10; i++){
           console.log(`${i} * ${number} = ${i * number} `);
           
        }
    }
    prompt.close();
})