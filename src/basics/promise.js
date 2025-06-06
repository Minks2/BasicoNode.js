

function requestCar(drivers) {
    return new Promise ((resolve, reject) => {
        if (drivers > 0){
             return resolve ("Seu motorista está a caminho!");
        } else { return reject("Não há motoristas disponíveis!");

        }
    })
}

  // function promiseTest() {
    //     let drivers = 2;
    
    //     const request = requestCar(drivers);
        
    //     request.then ((text) => {
    //         console.log("Promessa concluida", text);
            
    //     })
    //     .catch((err) =>{
    //      console.log("Promessa rejeitada!", err);
         
    //     })
    //     .finally(()=>{
    //         console.log("Fim da promessa!");
    //     })
    // }
    // promiseTest();
async function main() {
    let drivers = 0; 

    try {
        const request = await requestCar(drivers);
        console.log(`Resultado: ${request}`);
    } catch (error) {
        console.log(error); 
    }
    
    console.log("Inicio do programa");
    
    await getRandom().then(value =>{
        console.log(value);
    })
  
    console.log("Fim do programa");
    
}
main();

function getRandom() {
    return new Promise((resolve) => 
     setTimeout(() => resolve (Math.random()* 30), 3000)
    )
}

async function getNumber() {
    return 5;
}

async function m () {
    const v = await getNumber ();
    console.log(v + 1);
    
}
m();