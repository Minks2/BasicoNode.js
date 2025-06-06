
const numbers = ["um", "dois", "três", "quatro", "cinco","seis"]
numbers.push("sete")
numbers[7] = "oito"
console.log(numbers.push());//adiciona na última posição
console.log(numbers.pop());//tira o ultimo valor
console.log(numbers.shift());//tira o primeiro valor
console.log(numbers.unshift("zero"));//adiciona na primeira posição
console.log(numbers[6]);
console.log(numbers.length);
console.log(numbers);

