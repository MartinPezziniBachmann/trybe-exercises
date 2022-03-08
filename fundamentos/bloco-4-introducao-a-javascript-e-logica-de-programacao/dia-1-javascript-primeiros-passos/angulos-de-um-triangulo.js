const a = 45;
const b = 45;
const c = 90;

if (a < 0 || b < 0 || c < 0){
    console.log("ângulo invalido");
} else if (a+b+c === 180) {
    console.log(true);
} else {
    console.log(false);
}