function greet(name) {
    console.log("Seja bem vindo(a)", name);   
}
greet("Caio")
/*-----------------------------------------------*/
function sum (numA, numB){
    return numA + numB;
}
const resultString = sum ("2",3);
const result = sum (2,3);

console.log(resultString, result);
/*-----------------------------------------------*/
let resultFac = 1;
for (let i = 1; i <= 5 ; i++){
    resultFac *= i;
}
console.log(resultFac);
/*-----------------------------------------------*/
function factorial(number) {
    let resultFac = 1;
for (let i = 1; i <= number ; i++){
    resultFac *= i;
}
return resultFac;
}
console.log(factorial(4));
/*-----------------------------------------------*/
((name) => {
  console.log("Seja bem vindo", name)
})("Caio")
/*-----------------------------------------------*/
function createTag(name, prefix, suffix) {
    if(prefix && suffix){
        return `${prefix} ${name} ${suffix}`
    }
    if (prefix){
        return `${prefix} ${name}`
    }
    return name;
}
const tag = createTag("Caio", "Desenvolvedor" , "Dev")
console.log(tag);
/*-----------------------------------------------*/

function pow(number, expoent = 2) {
    return number ** expoent;
}

console.log(pow(2,10));
