const myPlayer = {
    nickname: "Caio",
    health: 20,
    isDead: false,
    present() {
        console.log("Meu nick é", this.nickname);
    }
}

console.log(myPlayer["isDead"]);
myPlayer.present();


console.log("Propriedades do player: ");
for (const prop in myPlayer) {
    console.log(prop);
}
/*-----------------------------------------------*/

/*const ramMemory = {
    name: "Corsair",
    size: 8000,
    hz: 2666
}
*/
const computer = {
    motherboard: "B360M",
    videoCard: "RTX 5090",
    cpu: "Intel i9 9900k",
    font: {
        name: "Corsair reactor",
        watts: 800
    },
    case: {
        name: "Pichau",
        color: "Black"
    },
    //  ram: [ramMemory, ramMemory, ramMemory]
    ram: [{
        name: "Corsair",
        size: 8000,
        hz: 2666
    },
    {
        name: "Corsair",
        size: 8000,
        hz: 2666
    },
    {
        name: "Corsair",
        size: 8000,
        hz: 2666
    },
    ]
}
console.log(computer);
const { log } = require("node:console");
/*-----------------------------------------------*/

const rl = require("node:readline");
const { fileURLToPath } = require("node:url");

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});



const player = {
    inventory: {
        items: [
            {
                name: "sword",
                durability: 160,
                enchancements: [
                    { name: "sharpness", level: 2 },
                    { name: "unbreakble", level: 3 }
                ]
            },
            {
                name: "shield",
                durability: 160
            },
        ],
        potions: [
            { type: "regeneration", duration: 12 },
            { type: "powerUp", duration: 20 },
        ]
    }
}

console.log("Inventário", player);
console.log("Itens no inventário", player.inventory.items);
console.log("Encantamentos da espada", player.inventory.items[0].enchancements);
console.log("Poções:");
console.log(player.inventory.potions[0]);
console.log(player.inventory.potions[1]);


const fruits = {

    nome: "uva",

    caroco: ["sim", "não"],

    variacoes: ["verde", "roxa"],

    tamanho: ["p", "m"],

    preco: [5, 10],
}

function opcoes(objeto) {
    console.log(`Opções disponiveis para a ${fruits.nome}: `);
    for (const option in objeto) {
        if (option !== "nome") {
            console.log(`${option} : ${objeto[option].join(", ")}`);
        }
    }

}

function menu(objeto) {
    
    prompt.question(`Digite como vai querer sua ${fruits.nome} (caroco, variação, tamanho, preço): `, answer => {
        const resposta = answer.split(",");


        console.log("Resumo do pedido:");
        console.log(`Caroço: ${resposta[0]}`);
        console.log(`Variação: ${resposta[1]}`);
        console.log(`Tamanho: ${resposta[2]}`);
        console.log(`Preço: ${resposta[3]}`);

        prompt.close();
    })
}
opcoes(fruits);
menu(fruits);


const my = {
    age:String = 12,
    
}