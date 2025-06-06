const brushTeeth = false;
const eatSomething = true;

const isReady = brushTeeth && eatSomething;

console.log("Pronto para a escola filho ? " + isReady);

/*-----------------------------------------------*/

const doHomework = true;
const makeBad = false;

const canPlay = doHomework || makeBad;

console.log("Pode jogar videogame? " + canPlay);

/*-----------------------------------------------*/

console.log( "Pode ir para a escola e jogar videogame? " + (
    (isReady) && (canPlay))
);

console.log("Pode ir para a escola ou jogar videogame? " + (
    (isReady)
    ||
    (canPlay))
); 