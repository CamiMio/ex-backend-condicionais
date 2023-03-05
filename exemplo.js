const temIngresso = false;
const censura = 16;
const idade = 18;

// ter ingresso e ter idade maior ou igual a censura 

if (temIngresso === true) {
    if (idade>=censura){ 
        console.log("Pode entrar");
    } else {
        console.log("barrada menor de idade")
    }
    
}else {
    console.log ("Barrada por falta de ingresso");
}
    