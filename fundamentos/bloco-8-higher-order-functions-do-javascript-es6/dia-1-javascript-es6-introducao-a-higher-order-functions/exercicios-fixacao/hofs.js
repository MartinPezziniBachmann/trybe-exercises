const acordar = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (funcao) => console.log(funcao());

doingThings(acordar);
doingThings(cafe);
doingThings(dormir);