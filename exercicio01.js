const jogada1 = "pedra"
const jogada2 = "tesoura"

if (jogada1 === jogada2){
    console.log("Empate");
} else if (
    (jogada1 === "pedra" && jogada2 === "tesoura") || 
    (jogada1 === "papel" && jogada2 === "pedra") || 
    (jogada1 === "tesoura" && jogada2 === "papel") 
) {
    console.log(`${jogada1} jogador 1 venceu`);

} else {
    console.log(`${jogada2} jogador 2 venceu`);
}
    
