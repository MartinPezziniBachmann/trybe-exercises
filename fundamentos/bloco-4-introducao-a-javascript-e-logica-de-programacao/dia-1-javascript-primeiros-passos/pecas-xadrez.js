const peca = "torre";

switch (peca){
    case "peão":
        console.log("Um espaço para frente");
        break;
    case "torre":
        console.log("Vertical e horizontal");
        break;
    case "rei":
        console.log("Um espaço para qualquer lado");
        break;
    case "rainha":
        console.log("Qualquer espaço para todos os lados");
        break;
    default:
        console.log("Peça invalida");
        break;
}