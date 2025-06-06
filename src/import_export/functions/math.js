
export function sum(a, b) {
   return a + b;
}

export function sub(a, b) {
   return a - b;
}

export function mult(a, b) {
   return a * b;
}

export class carro {
   preco = 2000;
   nome = "Camaro";
}
//maneira nova é só colocar o export antes
//ou
//export {sum, sub, mult, carro}
//ou
export default {sum, sub, mult, carro} 
//aqui no default, quando eu chamar lá no outro arquivo eu não vou conseguir usar a 
//desestruturação, e vou ter que chamar o arquivo math

//maneira antiga
//module.exports = { sum, sub, mult, carro };
//pra mudar pra maneira nova ir no package.json e mudar o type de commonjs pra module. 


