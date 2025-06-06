

function performe(name, exec) {
    const title = "Basico de node"
    console.log(name, "executou uma função");
    exec(title);
}

performe("Caio", (title) => {
    console.log("Eu sei o", title);
})
//------------------------------------------------------------------
function arrangeNumbers(exec) {
    const numbers = [3, 5, 8, 9, 100, 49, 34, 29, -34, 594, -356, 3456]

    for (const number of numbers) {
        exec(number)
    }
}

arrangeNumbers(number => console.log("eu sou o", number)
)
//------------------------------------------------------------------
function filter(array, callback) {
    const filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filtered.push(array[i])
        }
    }
    return filtered;
}

const names = ["Caio", "Sales", "Dias"];

const filteredNames = filter(names, (name) => name.startsWith("C"));

console.log(filteredNames);


names.forEach(nomes => {
    console.log(nomes.startsWith("C"), nomes);
})

//------------------------------------------------------------------

setTimeout(() => {
    console.log("Oi");
}, 200)

let count = 0;
const timer = setInterval(() => {
    if (count > 10) {
        clearInterval(timer)
        return;
    }
    console.log("Hello again", count);
    count++
}, 400)