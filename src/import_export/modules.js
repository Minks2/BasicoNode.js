

//nova:
import { sum, sub, mult, carro } from "./functions/math.js"
import math from "./functions/math.js"
import {fixedSum} from "./fixed.js"
import { exec } from "./commands/exec.js";
//import * as maths from "./functions/math.js"
//antiga:
//const math = require ("./functions/math");
//const {sum, sub, mult, carro} = require("./functions/math")

console.log(math.sum(2,4));
console.log(math.sub(2,4));
console.log(math.mult(2,4));

console.log(sum(1,1));
console.log(sub(1,1));
console.log(mult(1,1));

const Carro = new carro();
console.log(Carro.nome);
console.log(Carro.preco);
console.log(Carro);

console.log(sum(6.123, 4.236));
console.log(fixedSum(6.004, 4.001));

exec("Lucas");
