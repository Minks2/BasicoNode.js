import chalk from "chalk";
console.log(chalk.blue("Olha o azul"));
console.log(chalk.blue.underline("Olha o azul com underline"));
console.log(chalk.blue.underline.bold("Olha o azul com underline e bold"));
console.log(chalk.black.bgGreen("Olha background verde"));
console.log("  ");
console.log(process.env.GITHUBEMAIL);


import { intro, log, outro, text } from "@clack/prompts";

async function main() {
    intro(chalk.red("Bem vindo"));
    const name = await text({
        message: "Qual é o seu nome?",
        //placeholder é aquele texto que fica antes de digitar algo (para a pessoa saber aonde digitar)
        placeholder: 'digite aqui',
        initialValue: '',
        validate(name) {
            if (name.length < 4) return `Digite um nome válido!`;
        },
    });
    outro(`Olá ${name}`)
}
main();





