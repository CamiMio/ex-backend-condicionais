const  valorDoProduto = 100;
const  numeroParcelas = 7;


if (numeroParcelas === 1) {
    // a vista - COM 10% DE DESCONTO
    const desconto = valorDoProduto * 10 / 100;
    const valorAPagar = valorDoProduto - desconto;
    console.log( `Você deve pagar ${valorAPagar} pois à vista tem 10 % de desconto`);
    

}else if (numeroParcelas >= 2 && numeroParcelas <= 6) {
    // parcelado sem juros
    const valorParcela = (valorDoProduto / numeroParcelas).toFixed(2);
    console.log (`Você deve pagar ${numeroParcelas} parcelas sem juros de R$ ${ valorParcela}`);



} else if (numeroParcelas >= 7 && numeroParcelas <=12) {
    //parcelado com juros
    const valorAPagarJuros = (valorDoProduto * (1 + 1/100) ** numeroParcelas).toFixed(2);
    const valorParcelaJuros = (valorAPagarJuros / numeroParcelas).toFixed(2);
    console.log(`Você deve pagar ${numeroParcelas} parcelas de ${valorParcelaJuros} totalizando ${valorAPagarJuros} devido a incidência de juros`);


} else {
    console.log("numero de parcelas inválido");
}