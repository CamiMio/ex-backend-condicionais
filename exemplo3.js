const temIngresso = false;
const censura = 16;
const idade = 15;
const estaComOsPais = true;

//tem ingresso
// tem idade maior ou igual a censura OU está com os pais

if (temIngresso){
    if (idade >= censura || estaComOsPais === true){
        console.log("Pode entrar")
    }else {
        console.log ("Barrada")
    }

}else {
    console.log("Barrada.");
}