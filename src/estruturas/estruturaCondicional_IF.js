
const temperature = 24;

if (temperature >= 27) {
    console.log("Está muito quente aqui");
} else {
    console.log("Está uma temperatura agradável");
}

/*-----------------------------------------------*/
{
const grade = 10;

if (grade >= 9) {
    console.log("Passou tranquilo!");
} if (grade >= 8) {
    console.log("Passou!");
} else if (grade >= 7) {
    console.log("Passou no limite!");
} else {
    console.log("Reprovado. Estude mais");
}
}
/*-----------------------------------------------*/

const sideA = 5;   
const sideB = 5;
const sideC = 5;

if (sideA === sideB && sideB === sideC) {
    console.log("É um triângulo EQUILÁTERO");
} else if (sideA === sideB || sideB === sideC || sideC === sideA) {
    console.log("É um triângulo ISÓSCELES");
} else {
    console.log("É um triângulo ESCALENO");
}

/*-----------------------------------------------*/

const rl = require("node:readline");
    
const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});


prompt.question("Digite sua idade ", answer => {
    const age = Number.parseInt(answer);
    if (Number.isNaN(age)) {
        console.log("Digite um número válido");
    } else {
        console.log(`Você tem ${age} anos`);
        console.log(`daqui a 10 anos você terá ${age + 10} anos`);
    }

/*-----------------------------------------------*/

let bank = 3000;

console.log(`Valor total no banco: ${bank}`);
prompt.question("Digite o valor que deseja transferir ", answer => {
    const amount = Number.parseInt(answer);
    if (Number.isNaN(amount)) {
        console.log("Valor inválido, digite um número");
    } else if (amount > bank) {
        console.log("Valor maior que o total na conta");
    } else if (amount <= 0) {
        console.log("Valor deve ser positivo");
    } else {
        bank -= amount;
        console.log(`Você transferiu ${amount} reais`);
        console.log(`Agora seu total no banco é: ${bank}`);    
    }
   

/*-----------------------------------------------*/


prompt.question("Digite o salário base ", answer => {
    const baseSalary = Number.parseInt(answer);
prompt.question("Digite a performance ( ótimo | muito bom | bom | regular | abaixo ) no mês: " , answer =>{
    const performance = String(answer.toLowerCase());


let bonus = 0;

if (performance === "ótimo"){
    bonus = baseSalary * 0.2;
} else if (performance === "muito bom"){
    bonus = baseSalary * 0.15;
} else if (performance === "bom"){
    bonus = baseSalary * 0.1;
} else if (performance === "regular"){
    bonus = baseSalary * 0.05;
} else {
    console.log("Sem bonus pra você, se esforce na próxima");   
}
console.log(`Bônus calculado: $${bonus.toFixed(2)}`);
console.log(`Salário final: $${(bonus+=baseSalary).toFixed(2)}`);
prompt.close();

})
})
})
})