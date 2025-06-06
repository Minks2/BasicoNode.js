const animal = "gato";

switch (animal) {
    case "gato": {
        console.log("miau");
        break;
    }
    case "galinha": {
        console.log("cocorico");
        break;
    }
    case "cachorro": {
        console.log("au au");
        break;
    }
    case "pato": {
        console.log("qua qua qua");
        break;
    }
    case "pássaro": {
        console.log("bem-te-vi");
        break;
    }
}
console.log(`${animal} emitiu um som`);

/*-----------------------------------------------*/

function askQuestion(question) {
    return new Promise((resolve) => {
        prompt.question(question, (answer) => {
            resolve(answer);
        });
    });
}

const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});

prompt.question("O que deseja pesquisar?", answer => {
    const stuff = answer.trim().toLowerCase();

    switch (stuff) {
        case "pastel":
        case "bolo":
        case "torta":
        case "sorvete":
        case "pizza":
            console.log("É uma comida !");
            break;
        case "gato":
        case "cachorro":
        case "vaca":
        case "coelho":
            console.log("É um animal !");
            break;
        default:
            console.log("não é algo listado");
    }


console.log("Bem vindo ao programa");
console.log("[1] Data atual");
console.log("[2] Horário atual");
console.log("[3] Ver animais");
console.log("[4] Ver comidas");
console.log("[5] Ver linguagens");
console.log("[0] Sair");

prompt.question(" > Selecione o que deseja fazer " , answer =>{
   switch(answer){
    case "1":{
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        console.log(`Hoje é: ${day}/${month}/${year}`);
        break;
    }
    case "2":{
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        console.log(`Agora são ${hours} : ${minutes}`);
        break;
    }
    case "3":{
        console.log("Gato");
        console.log("Cachorro");
        console.log("Baleia");
        console.log("Pato");
        console.log("Coelho");
        console.log("Lontra");
        console.log("Raposa");
        break;
    }
    case "4":{
        console.log("Lasanha");
        console.log("Hamburguer");
        console.log("Churrasco");
        console.log("Pipoca");
        console.log("Panqueca");
        console.log("Pizza");
        console.log("Bolo");
        break;
    }
    case "5":{
        console.log("Javascript");
        console.log("Java");
        console.log("C++");
        console.log("Rust");
        console.log("Python");
        break;
    }
    default:{
      console.log("Fim do programa");
      
    }
   }
   
   prompt.close();
});
})






