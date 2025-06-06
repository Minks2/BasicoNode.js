

function main() {

    const carro = {
        name: "MERCEDES BENZ A45 AMG",
        value: 144.900,
        year: 2014,
        specs: "2.0 16V TURBO GASOLINA 4P AUTOMATIZADO"
    }

    const { name , value , year , specs } = carro;

    console.log(name, value, year, specs);


    const colors = ["blue" , "yellow" , "green" , "purble" , "black" , "white"]

    const [firstColor , secondColor] = colors;
    console.log(firstColor, secondColor);
    

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
        test:{
        letters :["a" , "b", "c", "d"],
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
        }
        ]}
    }

    //const {test:{ram}} = computer;
    //const {name:nameRam,size,hz} = ram;
    //console.log(ram);

    const {test:{ram}} = computer;
    const [{name:ramName, size, hz}, ramSize, ramHz] = ram;
    console.log(ramName, size, hz);
    
    
}

main();


