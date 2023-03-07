//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    const desconto = valorDoProduto * 95 / 100;
    //const valorFinal = valorDoProduto - desconto;
    console.log( `Você deve pagar ${(desconto / 100).toFixed(2)} pois no crédito tem 5 % de desconto`);

} else if (tipoDePagamento === " cheque") {
    const desconto = valorDoProduto * 97 / 100;
    console.log( `Você deve pagar ${(desconto / 100).toFixed(2)} pois no crédito tem 3 % de desconto`);

}else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    const desconto = valorDoProduto * 90 / 100;
    console.log(`Você deve pagar ${(desconto / 100).toFixed(2)} pois no debito tem 10 % de desconto`);
}