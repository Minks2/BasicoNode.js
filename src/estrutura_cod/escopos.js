//visibilidade que o código vai ter sobre variáveis e funções
//bloco, função, léxico

if (true) {
    const myName = "Caio";
    let myAge = 20;

    console.log(myAge, myName);
}
// console.log(myAge , myName);

const age = 20;
const e = "Sales";
function main() {
    const e = "Caio";
    function secundary() {
        let number = 2;
        console.log(number);
        console.log(e);
        console.log(age);
    }
    secundary()

}
main();


const audioContext = new AudioContext();
console.log(audioContext.name); // 'name' is deprecated